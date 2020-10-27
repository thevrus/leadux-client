<template>
	<div id="app">
		<div class="container">
			<NavWatch />
			<main v-if="!loading" class="watch">
				<div>
					<Player />
					<Panel />
				</div>
				<Playlist />
			</main>

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
import Panel from '@/components/panel/Panel'
import Footer from '@/components/Footer'
import { mapGetters, mapActions } from 'vuex'

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
		...mapGetters('auth', ['loggedIn']),
		...mapGetters('lessons', ['currentLesson']),
	},
	methods: {
		...mapActions('lessons', ['setCurrentLesson', 'loadLessons']),
		...mapActions('auth', ['me']),
	},
	mounted() {
		this.loggedIn && this.me()

		this.loadLessons().then(lessons => {
			const slug = this.$route.params.slug
			if (slug) {
				let flatLessons = []
				lessons.forEach(playlist => [
					playlist.lessons.forEach(lesson => flatLessons.push(lesson)),
				])

				const lesson = flatLessons.find(lesson => lesson.slug === slug)
				this.setCurrentLesson(lesson)
			} else {
				this.$router.push({
					name: 'WatchSlug',
					params: {
						slug: this.currentLesson.slug,
					},
				})
			}

			this.loading = false
		})
	},
}
</script>

<style lang="postcss" scoped>
#app {
	background-color: var(--bg);
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
