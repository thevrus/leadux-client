<template>
	<div>
		<NavWatch />
		<div v-if="!loading" class="lesson">
			<Player class="di-63" />
			<Playlist class="di-33" />
		</div>

		<p v-else>Loading...</p>
	</div>
</template>

<script>
import NavWatch from '@/components/NavWatch'
import Playlist from '@/components/Playlist'
import Player from '@/components/Player'

export default {
	name: 'Watch',
	components: {
		Player,
		Playlist,
		NavWatch,
	},
	data() {
		return {
			loading: true,
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		},
	},
	mounted() {
		this.loggedIn && this.$store.dispatch('auth/me')

		this.$store.dispatch('lessons/loadLessons').then(lessons => {
			const slug = this.$route.params.slug
			if (slug) {
				let flatLessons = []
				lessons.forEach(playlist => [
					playlist.lessons.forEach(lesson => flatLessons.push(lesson)),
				])

				const lesson = flatLessons.find(lesson => lesson.slug === slug)

				this.$store.dispatch('lessons/setCurrentLesson', lesson)
			} else {
				this.$router.push({
					name: 'WatchSlug',
					params: {
						slug: this.$store.getters['lessons/getCurrentLesson'].slug,
					},
				})
			}

			this.loading = false
		})
	},
}
</script>

<style scoped lang="scss">
.lesson {
	// display: grid;
	// grid-template-columns: 63.75% 33.75%;
	// grid-gap: 2.5%;
	display: inline;
}

.di-63 {
	display: inline;
	width: 63.75%;
	margin-right: 2.5%;
}
.di-33 {
	display: inline;
	width: 33.75%;
}
</style>
