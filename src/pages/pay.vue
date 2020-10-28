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
	components: {
		Nav,
		Price,
		Footer,
	},
}
</script>
