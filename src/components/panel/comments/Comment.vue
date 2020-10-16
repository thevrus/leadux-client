<template>
	<li v-if="comment.comment.user">
		<Avatar
			:avatar="comment.comment.user.avatar"
			:username="comment.comment.user.username"
		/>

		<div class="content">
			<div class="top">
				<span>{{ comment.comment.user.username }}</span
				>6 дней назад
			</div>
			<p class="comment">
				{{ comment.comment.comment }}
			</p>
		</div>
	</li>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
	components: {
		Avatar,
	},
	props: {
		comment: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="postcss" scoped>
li {
	background: #323232;
	widows: 100%;
	border-radius: 10px;
	padding: 1rem 2rem;
	margin-bottom: 1.1rem;

	.content {
		display: inline-block;
		vertical-align: top;

		.top {
			font-weight: 500;
			font-size: 13px;
			color: #666666;
			display: block;
			margin-bottom: 0.25rem;

			span {
				&::after {
					content: ' ';
					display: inline-block;
					width: 0.5px;
					height: 9px;
					background-color: #464646;
					margin: 0 0.5rem;
				}
			}
		}

		.comment {
			display: inline;
		}
	}
}
</style>
