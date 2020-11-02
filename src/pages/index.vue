<template>
	<div>
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
		<Chat />
	</div>
</template>

<script>
import Header from '@/components/sections/Header'
import Skills from '@/components/sections/Skills'
import Questions from '@/components/sections/Questions'
import Exercises from '@/components/sections/Exercises'
import Materials from '@/components/sections/Materials'
import Slider from '@/components/sections/Slider'
import Learn from '@/components/sections/Learn'
import FAQ from '@/components/sections/FAQ'
import Price from '@/components/sections/Price'
import Chat from '@/components/Chat'
import Footer from '@/components/sections/Footer'

export default {
	name: 'Home',
	components: {
		Header,
		Skills,
		Questions,
		Exercises,
		Materials,
		Price,
		Slider,
		Learn,
		FAQ,
		Chat,
		Footer,
	},
}
</script>
