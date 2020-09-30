<template>
	<div v-if="currentLesson" class="lesson">
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
.lesson {
	background-color: hsl(0, 0%, 95%);
	padding: 2rem;
	margin: 1rem 2rem;
	border-radius: 0.5rem;
	transition: 0.3s;
	display: flex;
	flex-direction: column;
	position: relative;

	.private {
		font-weight: bold;
		letter-spacing: 1px;
		text-transform: uppercase;
		font-size: 0.75rem;
	}

	.video-wrapper {
		position: relative;
		padding-top: 56.25%;
		overflow: hidden;

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
	}
}
</style>
