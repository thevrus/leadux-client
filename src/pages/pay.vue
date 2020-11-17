<template>
	<div>
		<Nav />
		<Price />
		<Footer />
	</div>
</template>

<script>
import Nav from '@/components/sections/Nav'
import Price from '@/components/sections/Price'
import Footer from '@/components/sections/Footer'

export default {
	name: 'Home',
	metaInfo: {
		title: 'Оплата – LeadUX',
	},
	components: {
		Nav,
		Price,
		Footer,
	},
}
</script>

<style scoped>
>>> section {
	padding: 100px 0;
}
</style>
