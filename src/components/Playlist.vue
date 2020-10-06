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
						<span class="summary__time">38 мин</span>
						<span class="summary__amount"
							>1 из {{ playlist.lessons.length }}</span
						>
					</div>
				</summary>

				<ul class="playlist__list">
					<li v-for="lesson in playlist.lessons" :key="lesson.id">
						<div class="playlist__wrapp">
							<div
								v-if="!lesson.videoId"
								class="playlist__lesson-info playlist__private"
							>
								<h6
									@click="setCurrentLesson(lesson)"
									class="playlist__video-title"
								>
									{{ lesson.order }}. {{ lesson.title }}
								</h6>
								<div v-if="lesson.videoLength" class="playlist__video-time">
									{{ lesson.videoLength | time }}
								</div>
							</div>

							<label v-else class="playlist__label">
								<input
									type="checkbox"
									:checked="watchedLessons.includes(lesson.id)"
									@change="handleChange(lesson.id)"
									class="playlist__checkbox"
								/>
								<span class="playlist__custom-check"></span>
								<div class="playlist__lesson-info">
									<h6
										@click="setCurrentLesson(lesson)"
										class="playlist__video-title"
									>
										{{ lesson.order }}. {{ lesson.title }}
									</h6>
									<div v-if="lesson.videoLength" class="playlist__video-time">
										{{ lesson.videoLength | time }}
									</div>
								</div>
							</label>
						</div>
					</li>
				</ul>
			</details>
		</div>

		<!-- <div v-for="playlist in playlists" :key="playlist.id">
			<div v-if="playlist.lessons.length > 0" class="playlist">
				<h4>{{ playlist.name }}</h4>

				<div v-for="lesson in playlist.lessons" :key="lesson.id">
					<h6 @click="setCurrentLesson(lesson)">
						{{ lesson.order }}. {{ lesson.title }}
						<span v-if="!lesson.videoId" class="private">– PRIVATE</span>
					</h6>
				</div>
			</div>
		</div> -->
	</aside>
</template>

<script>
export default {
	computed: {
		playlists() {
			return this.$store.getters['lessons/getLessons']
		},
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		},
		watchedLessons() {
			return this.$store.state.lessons.watchedLessons
		},
	},
	methods: {
		setCurrentLesson(lesson) {
			if (lesson.videoId) {
				if (lesson.slug === this.$route.params.slug) return

				this.$store.dispatch('lessons/setCurrentLesson', lesson)
				this.$router.push({ name: 'WatchSlug', params: { slug: lesson.slug } })
			} else if (!this.loggedIn) {
				this.$router.push('/login')
			} else {
				this.$router.push('/pay')
			}
		},
		handleChange(lessonId) {
			this.$store.dispatch('lessons/toggleWatchedLesson', lessonId)
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

<style lang="scss" scoped>
.playlist {
	width: 100%;
	background-color: #2c2c2c;
	color: #f4f4f4;
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	transition: 0.3s;
	text-align: left;
	border: 1px solid #363636;

	&__list {
		padding: 2.4rem 2rem 1.4rem 2rem;
	}

	&__wrapp {
		margin-bottom: 1rem;
	}

	&__label {
		display: flex;
		position: relative;
	}

	&__checkbox {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
	}

	&__checkbox:checked + &__custom-check {
		background-color: #34bf6c;
		border: 1px solid #34bf6c;
		&::before {
			content: '';
			width: 12px;
			height: 8px;
			background-image: url('../assets/check-box.svg');
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

	&__video-title {
		font-weight: 500;
		font-size: 0.95rem;
		line-height: 140%;
		color: #f4f4f4;
		margin: 0;
		&:hover {
			cursor: pointer;
			opacity: 0.8;
		}
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
			background-image: url('../assets/play-icon.svg');
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
			background-image: url('../assets/Locked.svg');
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
		background-image: url('../assets/summary-marker.svg');
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
