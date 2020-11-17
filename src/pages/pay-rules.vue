<template>
	<div>
		<Nav />
		<main class="container">
			<VueShowdown
				v-if="content.text"
				:markdown="content.text"
				class="content"
			/>
		</main>
		<Footer />
	</div>
</template>

<script>
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer.vue'
import axios from 'axios'

export default {
	name: 'PayRules',
	metaInfo: {
		title: 'Условия оплаты',
	},
	components: {
		Nav,
		Footer,
	},
	data() {
		return {
			content: '',
		}
	},
	beforeCreate() {
		axios
			.get(
				`${process.env.VUE_APP_API_URL}/pages/pay-rules?_publicationState=live`
			)
			.then(({ data }) => (this.content = data))
	},
}
</script>

<style lang="postcss" scoped>
.content {
	color: #fff;
	max-width: 800px;
	margin: 5rem auto;
	line-height: 1.5rem;
	font-weight: 100;
}
</style>
