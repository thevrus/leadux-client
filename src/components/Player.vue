<template>
	<div v-if="currentLesson" class="player">
		<div v-if="currentLesson.videoId" class="video-wrapper">
			<iframe
				:src="'https://player.vimeo.com/video/' + currentLesson.videoId"
				:title="currentLesson.title"
				frameborder="0"
				scrolling="no"
				allowfullscreen
			></iframe>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		currentLesson() {
			return this.$store.getters['lessons/getCurrentLesson']
		},
	},
}
</script>

<style lang="postcss" scoped>
.player {
	width: 100%;
	background-color: var(--panel-bg);
	border-radius: 0.5rem;
	margin-bottom: 1.5rem;

	.video-wrapper {
		position: relative;
		padding-top: 56.25%;
		height: 0;
		overflow: hidden;
		border-radius: 10px;

		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
}
</style>
