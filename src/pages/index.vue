<template>
	<div>
		<Nav />
		<Slider />
		<Learn />
		<Price />
		<FAQ />
		<Footer />
	</div>
</template>

<script>
import Nav from '@/components/Nav'
import Slider from '@/components/sections/Slider'
import Learn from '@/components/sections/Learn'
import FAQ from '@/components/sections/FAQ'
import Price from '@/components/sections/Price'
import Footer from '@/components/sections/Footer'

export default {
	name: 'Home',
	components: {
		Nav,
		Price,
		Slider,
		Learn,
		FAQ,
		Footer,
	},
}
</script>
