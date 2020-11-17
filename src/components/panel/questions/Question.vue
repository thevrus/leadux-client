<template>
	<details class="bubble" v-if="question">
		<summary @click="toggleDetails" class="content">
			<Avatar
				:avatar="question.author.avatar"
				:username="question.author.username"
			/>

			<span>
				<div class="info">
					<span class="user-name">
						{{ question.author.username }}
					</span>

					<span class="date">{{ question.created_at | timeSince }}</span>

					<span class="counter"> {{ question.answers.length }} ответ(ов) </span>
				</div>

				<p class="question">{{ question.text }}</p>
			</span>
		</summary>

		<span class="answers-counter" v-if="question.answers.length > 0">
			{{ question.answers.length }} ответ(ов)
		</span>

		<AnswerForm
			v-if="isOpenDetails && user && isStudent"
			:lessonId="question.id"
		/>

		<ul class="answers" v-if="question.answers.length > 0">
			<transition-group name="fade" tag="li">
				<div
					class="content__answer"
					v-for="answer of question.answers.slice().reverse()"
					:key="answer.id"
				>
					<Answer :answer="answer" />
				</div>
			</transition-group>
		</ul>
	</details>
</template>

<script>
import Avatar from '@/components/Avatar'
import AnswerForm from '@/components/panel/questions/AnswerForm'
import Answer from '@/components/panel/questions/Answer'
import { mapGetters } from 'vuex'
import { timeSince } from '@/assets/js/filters.js'

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
		question: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapGetters('auth', ['user', 'isStudent']),
	},
	methods: {
		toggleDetails() {
			return (this.isOpenDetails = !this.isOpenDetails)
		},
	},
	filters: {
		timeSince,
	},
}
</script>

<style lang="postcss" scoped>
details[open] summary ~ * {
	animation: fadeIn 0.3s ease-in-out;
}

summary {
	outline: none;
	position: relative;
	cursor: pointer;

	::-webkit-details-marker {
		display: none;
	}

	::-moz-details-marker {
		display: none;
	}

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
	font-size: 0.9rem;
	color: #fff;
	padding: 0.6rem 0;
	border-top: 1px solid #262626;
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
	background-color: #17181c;
	width: 100%;
	border-radius: 10px;
	padding: 1rem 2rem 1.5rem 2rem;
	margin-bottom: 1.1rem;

	.content {
		font-size: 0.82rem;
		color: #666;
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

		.question {
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
