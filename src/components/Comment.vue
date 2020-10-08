<template>
	<li v-if="comment.comment.user">
		<div class="avatar">
			<div v-if="comment.comment.user.avatar">
				<img :src="host_url + user.avatar.url" alt="Avatar" class="user__img" />
			</div>
			<div class="avatar-letter" v-else>
				{{ comment.comment.user.username | capitalize }}
			</div>
		</div>

		<span>
			{{ comment.comment.user.username }} / {{ comment.comment.comment }}
		</span>
	</li>
</template>

<script>
export default {
	props: {
		comment: {
			type: Object,
			required: true,
		},
	},
	filters: {
		capitalize(value) {
			if (!value) return ''
			return value
				.toString()
				.slice(0, 2)
				.toUpperCase()
		},
	},
}
</script>

<style lang="scss" scoped>
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
		background: linear-gradient(180deg, #93e3a0 0%, #5b8b62 100%);
		position: relative;
		overflow: hidden;
		display: inline-block;
		margin-right: 1rem;
	}

	.avatar-letter {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -46%);
		user-select: none;
		font-weight: bold;
		font-size: 1rem;
		color: #ffffff;
	}

	span {
		vertical-align: top;
	}
}
</style>
