<template>
	<div>
		<Crisp />
		<Header />
		<Skills />
		<Questions />
		<Exercises />
		<Materials />
		<Learn />
		<Slider />
		<Price />
		<FAQ />
		<Footer />
	</div>
</template>

<script>
import Crisp from '@/components/Crisp'
import Header from '@/components/sections/Header'
import Skills from '@/components/sections/Skills'
import Questions from '@/components/sections/Questions'
import Exercises from '@/components/sections/Exercises'
import Materials from '@/components/sections/Materials'
import Slider from '@/components/sections/Slider'
import Learn from '@/components/sections/Learn'
import FAQ from '@/components/sections/FAQ'
import Price from '@/components/sections/Price'
import Footer from '@/components/sections/Footer'

export default {
	name: 'Home',
	components: {
		Crisp,
		Header,
		Skills,
		Questions,
		Exercises,
		Materials,
		Price,
		Slider,
		Learn,
		FAQ,
		Footer,
	},
}
</script>
