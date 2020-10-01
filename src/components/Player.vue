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
		<h3>{{ currentLesson.order }}.{{ currentLesson.title }}</h3>
	</div>
</template>

<script>
export default {
	computed: {
		currentLesson() {
			return (
				this.$store.getters['lessons/getCurrentLesson'] ||
				this.$store.getters['lessons/getPlaylists'][0].lessons[0]
			)
		},
	},
}
</script>

<style lang="scss" scoped>
.player {
	width: 100%;
	background-color: #2c2c2c;
	border-radius: 0.5rem;
	transition: 0.3s;

	.video-wrapper {
		position: relative;
		padding-top: 56.25%;
		overflow: hidden;
		border-radius: 0.5rem 0.5rem 0 0;

		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	h3 {
		font-weight: bold;
		font-size: 1.1rem;
		color: #f4f4f4;
		margin-left: 1rem;
	}
}
</style>
