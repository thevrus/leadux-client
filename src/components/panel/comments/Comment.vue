<template>
	<li v-if="comment.comment.author">
		<details>
			<summary @click="toggleDetails">
				<div class="content">
					<div class="content__info-wrap">
						<Avatar
							:avatar="comment.comment.author.avatar"
							:username="comment.comment.author.username"
						/>
						<span class="content__user-name">
							{{ comment.comment.author.username }}
						</span>
						<span class="content__date">
							{{ '6 дней назад' | date }}
						</span>
					</div>
					<span
						class="content__counter"
						v-if="comment.comment.answers.length > 0"
					>
						{{ comment.comment.answers.length }} ответ
					</span>
				</div>

				<p class="content__comment">
					{{ comment.comment.text }}
				</p>
			</summary>

			<ul
				v-for="answer of comment.comment.answers"
				:key="answer.id"
				class="content__answer-box"
			>
				<li class="content__answer">
					<div class="content">
						<div class="content__info-wrap">
							<Avatar
								:avatar="answer.author.avatar"
								:username="answer.author.username"
							/>

							<span class="content__user-name">
								{{ answer.author.username }}
							</span>
							<span class="content__date">
								{{ '6 дней назад' | date }}
							</span>
						</div>
						<span class="content__counter">
							Добавить ответ
						</span>
					</div>

					<p class="content__comment">
						{{ answer.text }}
					</p>
				</li>
			</ul>

			<div v-if="isOpenDetails">
				<CommentForm :lessonId="currentLesson.id" />
			</div>
		</details>
	</li>
</template>

<script>
import Avatar from '@/components/Avatar'
import CommentForm from '@/components/panel/comments/CommentForm'
import { mapGetters } from 'vuex'

export default {
	components: {
		Avatar,
		CommentForm,
	},
	data() {
		return {
			isOpenDetails: false,
		}
	},
	props: {
		comment: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapGetters('lessons', { currentLesson: 'getCurrentLesson' }),
	},
	methods: {
		toggleDetails() {
			return (this.isOpenDetails = !this.isOpenDetails)
		},
	},
	filters: {
		date(value) {
			if (!value) return
			return value
		},
	},
}
</script>

<style lang="postcss" scoped>
summary::-webkit-details-marker {
	display: none;
}

summary {
	outline: none;
	background-color: #323232;
	position: relative;
	cursor: pointer;

	&::after {
		position: absolute;
		right: 0;
		top: 8px;
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
	details[open] & {
		margin-bottom: 1.5rem;
	}
}

li {
	background-color: #323232;
	width: 100%;
	border-radius: 10px;
	padding: 1rem 2rem;
	margin-bottom: 1.1rem;

	.content {
		width: 100%;
		display: flex;
		justify-content: space-between;
		position: relative;

		&__info-wrap {
			font-weight: 500;
			font-size: 0.82rem;
			color: #666666;
		}

		&__user-name {
			vertical-align: top;
			&::after {
				content: ' ';
				display: inline-block;
				width: 0.5px;
				height: 9px;
				background-color: #464646;
				margin: 5px 0.5rem;
			}
		}

		&__date {
			vertical-align: top;
		}

		&__comment {
			padding-left: 3.6rem;
			margin-top: 1rem;
			display: inline;
			padding-left: 3.6rem;
			margin-top: 4rem;
			font-family: Freigeist;
			font-style: normal;
			font-weight: 500;
			font-size: 0.94rem;
			color: #f4f4f4;
		}

		&__counter {
			margin-right: 1.5rem;
			font-family: Freigeist;
			font-style: normal;
			font-weight: 500;
			font-size: 0.82rem;
			color: #d5d6a9;
		}
	}
}
</style>
