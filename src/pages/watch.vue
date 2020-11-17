<template>
	<div id="app">
		<Nav />
		<div class="container">
			<main v-if="!loading" class="watch">
				<div>
					<Player />
					<Panel />
				</div>
				<Playlist />
			</main>

			<Loader v-else />
		</div>
		<div class="box"></div>
		<Footer />
	</div>
</template>

<script>
import Nav from '@/components/Nav'
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
		Nav,
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
					name: 'watch-slug',
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
.box {
	height: 100%;
}
#app {
	display: grid;
	grid-template-rows: 1fr auto;
	min-height: 100vh;
	background-color: var(--bg);
	min-width: 1090px !important;
}

.watch {
	display: grid;
	grid-template-columns: 1fr 388px;
	grid-gap: 1.5%;
}

.container {
	max-width: 1580px;
}
</style>
