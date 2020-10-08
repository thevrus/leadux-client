<template>
	<transition name="fade" mode="out-in">
		<router-view />
	</transition>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import './assets/css/normalize';
@import './assets/css/global';
@import './assets/css/helpers';
@import './assets/css/transitions';
</style>
