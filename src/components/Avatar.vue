<template>
	<div class="avatar">
		<div v-if="avatar">
			<img :src="host_url + avatar.url" alt="Avatar" class="img" />
		</div>
		<div class="avatar-letter" v-else>
			{{ username | capitalize }}
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			host_url: process.env.VUE_APP_API_URL,
		}
	},
	props: ['avatar', 'username'],
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

<style lang="postcss" scoped>
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

.img {
	object-fit: cover;
	width: 100%;
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
</style>
