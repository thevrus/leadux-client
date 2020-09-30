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
@import './assets/normalize';
@import './assets/global';
@import './assets/helpers';

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
