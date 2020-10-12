<template>
	<li v-if="comment.comment.user">
		<div class="avatar">
			<div v-if="comment.comment.user.avatar">
				<img
					:src="host_url + comment.comment.user.avatar.url"
					alt="Avatar"
					class="avatar"
				/>
			</div>
			<div class="avatar-letter" v-else>
				{{ comment.comment.user.username | capitalize }}
			</div>
		</div>

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
import { capitalize } from '@/js/filters'

export default {
	props: {
		comment: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			host_url: process.env.VUE_APP_API_URL,
		}
	},
	filters: {
		capitalize,
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

	.avatar {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		background-color: #76b680;
		position: relative;
		overflow: hidden;
		display: inline-block;
		margin-right: 1rem;
	}

	.avatar-letter {
		position: absolute;
		width: 100%;
		text-align: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -46%);
		user-select: none;
		font-weight: bold;
		font-size: 1rem;
		color: #ffffff;
	}

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
