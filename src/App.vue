<template>
	<main id="app" class="container">
		<!-- <Nav /> -->

		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
	</main>
</template>

<script>
// import Nav from '@/components/Nav'

export default {
	components: {
		// Nav,
	},
}
</script>

<style lang="scss">
@import './assets/css/normalize';
@import './assets/css/global';
@import './assets/css/helpers';
@import './assets/css/transitions';
</style>
