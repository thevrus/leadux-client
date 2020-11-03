<template>
	<div class="content">
		<Avatar :avatar="answer.author.avatar" :username="answer.author.username" />

		<div>
			<div class="info">
				<span v-if="answer.author.role.type == 'author'" class="author">
					Автор курса
				</span>

				<span class="user-name">
					{{ answer.author.username }}
				</span>

				<span class="date">
					{{ answer.created_at | timeSince }}
				</span>
			</div>

			<p class="question">{{ answer.text }}</p>
		</div>
	</div>
</template>

<script>
import Avatar from '@/components/Avatar'
import { timeSince } from '@/assets/js/filters.js'

export default {
	name: 'Answer',
	components: {
		Avatar,
	},
	props: {
		answer: {
			type: Object,
			required: true,
		},
	},
	filters: {
		timeSince,
	},
}
</script>

<style lang="postcss" scoped>
.content {
	position: relative;
	padding-top: 1.5rem;
	font-size: 0.82rem;
	color: #fff;
	vertical-align: top;
	margin-bottom: 2rem;
	border-top: 1px solid #262626;
	display: grid;
	grid-template-columns: 60px 1fr;

	.info {
		margin-bottom: 0.5rem;
	}

	.user-name {
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

	.author {
		font-size: 13px;
		padding: 2px 10px;
		border: 1px solid #262626;
		border-radius: 4px;
		color: #b0b0b0;
		vertical-align: top;
		margin-right: 0.5rem;
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
}
</style>
