<template>
	<div>
		<Nav />
		<VueShowdown v-if="content.text" :markdown="content.text" class="content" />
		<Footer />
	</div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/sections/Footer.vue'
import axios from 'axios'

export default {
	name: 'PrivacyPolicy',
	metaInfo: {
		title: 'Правила использования',
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
				`${process.env.VUE_APP_API_URL}/pages/terms-of-use?_publicationState=live`
			)
			.then(({ data }) => (this.content = data))
	},
}
</script>

<style lang="postcss" scoped>
.content {
	color: #fff;
	max-width: 800px;
	margin: 0 auto;
	line-height: 1.5rem;
	font-weight: 100;
}
</style>
