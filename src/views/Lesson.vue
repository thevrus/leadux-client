<template>
	<div>
		<h1>Lessons</h1>
		<hr />
		<div v-if="!loading">
			<div v-for="lesson in lessons" :key="lesson.id" class="lesson">
				<div v-if="lesson.videoId">
					<iframe
						:src="'https://player.vimeo.com/video/' + lesson.videoId"
						width="640"
						height="360"
						frameborder="0"
						allowFullScreen
					></iframe>
				</div>
				<span class="private" v-else>Private</span>
				<h3>{{ lesson.number }}.{{ lesson.title }}</h3>
			</div>
		</div>

		<p v-else>Loading...</p>
	</div>
</template>

<script>
import UserService from '../services/user.service'

export default {
	name: 'Lesson',
	data() {
		return {
			lessons: [],
			loading: true,
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		},
	},
	mounted() {
		UserService.getLessons().then(response => {
			this.lessons = response.data
			this.lessons.sort((a, b) => a.number - b.number)
			this.loading = false
		})
	},
}
</script>

<style scoped lang="scss">
.lesson {
	background-color: hsl(0, 0%, 95%);
	padding: 2rem;
	margin: 1rem 2rem;
	border-radius: 0.5rem;

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
