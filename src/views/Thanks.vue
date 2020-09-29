<template>
	<div>Thanks {{ user }}</div>
</template>

<script>
export default {
	data() {
		return {
			user: this.$route.query.token,
		}
	},
}
</script>
