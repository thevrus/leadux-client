<template>
	<div>
		<NavWatch />
		<div v-if="!loading" class="lesson">
			<div>
				<Player />
				<Panel />
			</div>
			<Playlist />
		</div>

		<p v-else>Loading...</p>
	</div>
</template>

<script>
import NavWatch from '@/components/NavWatch'
import Playlist from '@/components/Playlist'
import Player from '@/components/Player'
import Panel from '@/components/Panel'

export default {
	name: 'Watch',
	components: {
		Player,
		Playlist,
		NavWatch,
		Panel,
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
	display: grid;
	grid-template-columns: 63.75% 33.75%;
	grid-gap: 2.5%;
}
</style>
