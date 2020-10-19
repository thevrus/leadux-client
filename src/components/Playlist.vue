<template>
	<aside>
		<div v-for="playlist in playlists" :key="playlist.id">
			<details
				v-if="playlist.lessons.length > 0"
				open
				class="playlist"
				id="details"
			>
				<summary class="summary">
					<p class="summary__title">{{ playlist.name }}</p>
					<div class="summary__wrap">
						<span class="summary__time">
							{{ playlistLength(playlist.lessons) }}
						</span>
						<span class="summary__amount">
							1 из {{ playlist.lessons.length }}
						</span>
					</div>
				</summary>

				<ul>
					<li
						v-for="lesson in playlist.lessons"
						:key="lesson.id"
						@click="toggleCurrentLesson(lesson)"
						class="playlist__wrapp,"
						:class="{ active: currentLesson.id === lesson.id }"
					>
						<div
							v-if="!lesson.videoId"
							class="playlist__lesson-info playlist__private"
						>
							<h6>{{ lesson.order }}. {{ lesson.title }}</h6>
							<p v-if="lesson.videoLength" class="playlist__video-time">
								{{ lesson.videoLength | time }}
							</p>
						</div>

						<div v-else class="playlist__lesson-wrap">
							<label>
								<input
									type="checkbox"
									:checked="watchedLessons.includes(lesson.id)"
									@change="toggleWatchedLesson(lesson.id)"
								/>
								<span class="playlist__custom-check"></span>
							</label>

							<div class="playlist__lesson-info">
								<h6>{{ lesson.order }}. {{ lesson.title }}</h6>
								<p v-if="lesson.videoLength" class="playlist__video-time">
									{{ lesson.videoLength | time }}
								</p>
							</div>
						</div>
					</li>
				</ul>
			</details>
		</div>
	</aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapGetters('auth', ['loggedIn']),

		...mapGetters('lessons', {
			watchedLessons: 'watchedLessons',
			playlists: 'getLessons',
			currentLesson: 'getCurrentLesson',
		}),
	},
	methods: {
		...mapActions('lessons', ['toggleWatchedLesson', 'setCurrentLesson']),

		toggleCurrentLesson(lesson) {
			if (lesson.videoId) {
				if (lesson.slug === this.$route.params.slug) return

				this.setCurrentLesson(lesson)
				this.$router.push({ name: 'WatchSlug', params: { slug: lesson.slug } })
			} else if (!this.loggedIn) {
				this.$router.push('/login')
			} else {
				this.$router.push('/pay')
			}
		},

		playlistLength(pl) {
			let plLength = 0

			pl.forEach(les => {
				if (les.videoLength) plLength += les.videoLength
			})

			return Math.floor(plLength / 60) + ' мин'
		},
	},
	filters: {
		time(value) {
			if (!value || typeof value !== 'number') return value
			return Math.floor(value / 60) + ' мин.'
		},
	},
}
</script>

<style lang="postcss" scoped>
.playlist {
	width: 100%;
	background-color: var(--panel-bg);
	color: #f4f4f4;
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	transition: 0.3s;
	text-align: left;
	border: 1px solid var(--panel-border);

	ul {
		padding: 1.4rem 0 1.4rem 0;
	}

	li {
		padding: 0.65rem 2rem 0.65rem 2rem;
		width: 100%;
		position: relative;

		&:hover {
			cursor: pointer;
			background: linear-gradient(90deg, #404040 0.05%, #40404000 100%);
		}

		&:hover {
			&::before {
				opacity: 1;
			}
		}
	}

	.active {
		position: relative;
		cursor: pointer;
		background: linear-gradient(90deg, #404040 0.05%, #40404000 100%);

		&:before {
			content: '';
			background-color: var(--secondary);
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 3px;
			height: 100%;
		}
	}

	label {
		display: flex;
		position: relative;
	}

	&__lesson-wrap {
		display: flex;
	}

	input[type='checkbox'] {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
	}

	input[type='checkbox']:checked + &__custom-check {
		background-color: #34bf6c;
		border: 1px solid #34bf6c;

		&::before {
			content: '';
			width: 12px;
			height: 8px;
			background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPjxwYXRoIGQ9Ik0yIDMuNWwzIDNMMTAgMSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLjEiIHk9Ii4xIiB3aWR0aD0iMTEuOCIgaGVpZ2h0PSI5LjMiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPjxmZU9mZnNldCBkeT0iMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249Ii41Ii8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA5IDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48L2RlZnM+PC9zdmc+');
			background-size: cover;
			display: block;
			margin-top: 31%;
			margin-left: 21%;
		}
	}

	&__custom-check {
		width: 1.38rem;
		height: 1.38rem;
		border: 1px solid #686868;
		border-radius: 50%;
		transition: all 0.3s;
		cursor: pointer;
	}

	&__lesson-info {
		padding-left: 1rem;
	}

	h6 {
		font-weight: 500;
		font-size: 0.95rem;
		line-height: 140%;
		color: #f4f4f4;
		margin: 0;
	}

	&__video-time {
		font-weight: 500;
		font-size: 0.95rem;
		line-height: 140%;
		color: #686868;
		position: relative;
		padding-left: 1rem;

		&::before {
			content: '';
			width: 6px;
			height: 7.3px;
			display: block;
			background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zLjk3IDEuNTQ3YzEuMzQyLjkzIDIuMDEzIDEuMzk2IDIuMDMgMi4wNDZ2LjA2NGMtLjAxNy42NS0uNjg4IDEuMTE2LTIuMDMgMi4wNDdDMi4yNTMgNi44OTQgMS4zOTQgNy40OS43MiA3LjE2YTEuMjgzIDEuMjgzIDAgMDEtLjA2NS0uMDM0QzAgNi43NiAwIDUuNzE1IDAgMy42MjVTMCAuNDkuNjU1LjEyNEMuNjc2LjExMi42OTguMS43Mi4wOWMuNjc1LS4zMyAxLjUzNC4yNjYgMy4yNTEgMS40NTd6IiBmaWxsPSIjNjg2ODY4Ii8+PC9zdmc+');
			background-size: cover;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0;
		}
	}

	&__private {
		position: relative;
		padding-left: 2.1rem;
		margin-left: 0.25rem;

		&::before {
			content: '';
			width: 14px;
			height: 18px;
			display: block;
			background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjM3NSA2LjEyNXYtMS43NWE0LjM3NSA0LjM3NSAwIDEwLTguNzUgMHYxLjc1QTIuNjI1IDIuNjI1IDAgMDAwIDguNzV2Ni4xMjVBMi42MjUgMi42MjUgMCAwMDIuNjI1IDE3LjVoOC43NUEyLjYyNSAyLjYyNSAwIDAwMTQgMTQuODc1VjguNzVhMi42MjUgMi42MjUgMCAwMC0yLjYyNS0yLjYyNXptLTctMS43NWEyLjYyNSAyLjYyNSAwIDAxNS4yNSAwdjEuNzVoLTUuMjV2LTEuNzV6bTcuODc1IDEwLjVhLjg3NS44NzUgMCAwMS0uODc1Ljg3NWgtOC43NWEuODc1Ljg3NSAwIDAxLS44NzUtLjg3NVY4Ljc1YS44NzUuODc1IDAgMDEuODc1LS44NzVoOC43NWEuODc1Ljg3NSAwIDAxLjg3NS44NzV2Ni4xMjV6IiBmaWxsPSIjRjc1QTgwIi8+PC9zdmc+');
			position: absolute;
			top: 0;
			left: 0;
		}
	}
}

summary::-webkit-details-marker {
	display: none;
}

.summary {
	outline: none;
	background-color: #333333;
	border-radius: 0.5rem;
	padding: 1.75rem 2.25rem;
	position: relative;
	cursor: pointer;

	&::after {
		position: absolute;
		right: 2.25rem;
		top: 40%;
		content: '';
		width: 10.6px;
		height: 6.3px;
		display: block;
		background-size: cover;
		background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuMjQ2IDUuOTU2YTEgMSAwIDAxLTEuNDEgMGwtMy41OS0zLjU0LTMuNTQgMy41NGExIDEgMCAxMS0xLjQxLTEuNDJsNC4yNC00LjI0YTEgMSAwIDAxMS40MiAwbDQuMjkgNC4yNGExIDEgMCAwMTAgMS40MnoiIGZpbGw9IiNDMUMxQzEiLz48L3N2Zz4=');
		transform: rotate(-180deg);
		transition: transform 0.3s;
		cursor: pointer;
	}

	details[open] &::after {
		transform: rotate(0deg);
	}

	&__title {
		font-weight: bold;
		font-size: 1.1rem;
		line-height: 145%;
		margin-bottom: 0.5rem;
		user-select: none;
		cursor: pointer;
	}

	&__time {
		margin-right: 1.25rem;
	}

	&__time,
	&__amount {
		color: #7c7c7c;
		font-size: 1rem;
		user-select: none;
	}
}
</style>
