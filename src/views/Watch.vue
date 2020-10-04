<template>
	<div>
		<NavWatch />
		<div v-if="!loading" class="lesson">
			<Player />
			<Playlist />
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

		this.$store.dispatch('lessons/loadLessons').then(() => {
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
