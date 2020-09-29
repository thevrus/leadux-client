<template>
	<div class="div">
		{{ me }}
	</div>
</template>

<script>
import AuthService from '@/services/auth.service'

export default {
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
}
</style>
