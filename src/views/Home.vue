<template>
	<div class="tac">
		<Nav />
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Lead UX is coming soon" />
	</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav'

export default {
	name: 'Home',
	components: {
		HelloWorld,
		Nav,
	},
}
</script>

<style scoped>
.tac {
	text-align: center;
}
</style>
