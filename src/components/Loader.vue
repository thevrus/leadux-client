<template functional>
	<div class="spinner"></div>
</template>

<style lang="postcss" scoped>
.spinner {
	width: 4rem;
	height: 4rem;
	border: 3px solid rgba(255, 255, 255, 0.4);
	border-top-color: rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	animation: rotation 0.8s ease infinite;

	position: absolute;
	top: 50%;
	left: 46%;

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
}
</style>
