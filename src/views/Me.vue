<template>
	<div class="tac">
		<Nav />
		<div class="div">
			{{ me }}
		</div>
	</div>
</template>

<script>
import AuthService from '@/services/auth.service'
import Nav from '@/components/Nav'

export default {
	components: {
		Nav,
	},
	data() {
		return {
			me: null,
		}
	},
	created() {
		return AuthService.me().then(result => (this.me = result))
	},
}
</script>

<style scoped>
.div {
	text-align: left;
	color: #7ab72b;
}
</style>
