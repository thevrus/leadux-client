<template>
	<transition name="fade" mode="out-in">
		<router-view />
	</transition>
</template>

<script>
export default {
	name: 'App',
	metaInfo: {
		title: 'LeadUX – Единственный курс Figma который тебе нужен',
	},
}
</script>

<style lang="postcss">
@import 'normalize.css';
@import 'sanitize.css';
@import './assets/css/variables';
@import './assets/css/fonts';
@import './assets/css/global';
@import './assets/css/transitions';
</style>
