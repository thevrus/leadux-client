<template>
	<div v-if="currentLesson" class="lesson">
		<div v-if="currentLesson.videoId">
			<iframe
				:src="'https://player.vimeo.com/video/' + currentLesson.videoId"
				width="640"
				height="360"
				frameborder="0"
				allowFullScreen
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

	h3 {
		font-weight: bold;
	}
}
</style>
