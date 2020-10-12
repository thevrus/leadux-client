<template>
	<div class="tac">
		<Nav />
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
