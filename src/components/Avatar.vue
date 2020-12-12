<template>
	<div class="avatar">
		<div v-if="avatar">
			<img :src="avatar.url" alt="Avatar" class="img" />
		</div>
		<div v-else class="avatar-letter">
			{{ username | capitalize }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Avatar',
	filters: {
		capitalize(value) {
			if (!value) return ''
			return value
				.toString()
				.slice(0, 2)
				.toUpperCase()
		},
	},
	props: ['avatar', 'username'],
}
</script>

<style lang="postcss" scoped>
.avatar {
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background-color: #34bf6c;
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
	color: #fff;
}
</style>
