<template>
	<details class="bubble" v-if="comment">
		<summary @click="toggleDetails" class="content">
			<Avatar
				:avatar="comment.author.avatar"
				:username="comment.author.username"
			/>

			<span>
				<div class="info">
					<span class="user-name">
						{{ comment.author.username }}
					</span>

					<span class="date">{{ '6 дней назад' | date }}</span>

					<span class="counter"> {{ comment.answers.length }} ответ(ов) </span>
				</div>

				<p class="comment">{{ comment.text }}</p>
			</span>
		</summary>

		<span class="answers-counter" v-if="comment.answers.length > 0">
			{{ comment.answers.length }} ответ(ов)
		</span>

		<ul class="answers" v-if="comment.answers.length > 0">
			<transition-group name="fade" tag="li">
				<div
					class="content__answer"
					v-for="answer of comment.answers.slice().reverse()"
					:key="answer.id"
				>
					<Answer :answer="answer" />
				</div>
			</transition-group>
		</ul>

		<div v-if="isOpenDetails && user">
			<AnswerForm :lessonId="comment.id" />
		</div>
	</details>
</template>

<script>
import Avatar from '@/components/Avatar'
import AnswerForm from '@/components/panel/questions/AnswerForm'
import Answer from '@/components/panel/questions/Answer'
import { mapGetters } from 'vuex'

export default {
	components: {
		Avatar,
		AnswerForm,
		Answer,
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
		...mapGetters('auth', ['user']),
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
details[open] summary ~ * {
	animation: fadeIn 0.3s ease-in-out;
}

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

.answers-counter {
	display: block;
	font-size: 1rem;
	color: #ffffff;
	padding: 1.2rem 0;
	border-top: 1px solid #3f3f3f;
}

.answers {
	list-style: none;
	margin: 0;
	padding: 0;
}

.info {
	margin-bottom: 0.5rem;
}

.bubble {
	background-color: #323232;
	width: 100%;
	border-radius: 10px;
	padding: 1rem 2rem 1.5rem 2rem;
	margin-bottom: 1.1rem;

	.content {
		font-size: 0.82rem;
		color: #666666;
		display: grid;
		grid-template-columns: 60px 1fr;

		.user-name {
			vertical-align: top;

			&::after {
				content: '';
				display: inline-block;
				width: 0.5px;
				height: 9px;
				background-color: #464646;
				margin: 5px 0.5rem;
			}
		}

		.date {
			vertical-align: top;
		}

		.comment {
			display: inline;
			min-width: 100%;
			color: #f4f4f4;
			line-height: 165%;
			padding-top: 0.8rem;
			letter-spacing: 0.2px;
		}

		.counter {
			margin-right: 1.5rem;
			margin-top: 2px;
			font-size: 0.82rem;
			color: #d5d6a9;
			float: right;
		}
	}
}
</style>
