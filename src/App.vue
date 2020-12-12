<template>
	<transition-group name="fade">
		<router-view key="main" />
		<Chat key="chat" />
	</transition-group>
</template>

<script>
import Chat from '@/components/Chat'

export default {
	name: 'App',
	metaInfo: {
		title: 'LeadUX – уроки Figma',
	},
	components: {
		Chat,
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
