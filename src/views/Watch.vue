<template>
	<div id="app">
		<div class="container">
			<NavWatch />
			<div v-if="!loading" class="watch">
				<div>
					<Player />
					<Panel />
				</div>
				<Playlist />
			</div>

			<Loader v-else />
		</div>
		<Footer />
	</div>
</template>

<script>
import NavWatch from '@/components/NavWatch'
import Loader from '@/components/Loader'
import Playlist from '@/components/Playlist'
import Player from '@/components/Player'
import Panel from '@/components/Panel'
import Footer from '@/components/Footer'

export default {
	name: 'Watch',
	components: {
		Loader,
		Player,
		Playlist,
		NavWatch,
		Panel,
		Footer,
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
#app {
	display: grid;
	grid-template-rows: 1fr auto;
	min-height: 100vh;
}

.watch {
	display: grid;
	grid-template-columns: 1fr 388px;
	grid-gap: 2%;
}
</style>
