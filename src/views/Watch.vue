<template>
	<div>
		<h1>Lessons</h1>
		<hr />
		<div v-if="!loading" class="lesson">
			<Player />
			<Playlist />
		</div>

		<p v-else>Loading...</p>
	</div>
</template>

<script>
import Player from '@/components/Player'
import Playlist from '@/components/Playlist'
import DataService from '../services/data.service'

export default {
	name: 'Watch',
	components: {
		Player,
		Playlist,
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
		DataService.getPlaylists().then(response => {
			this.$store.dispatch('lessons/setPlaylists', response.data)
			this.loading = false
		})
	},
}
</script>

<style scoped lang="scss">
.lesson {
	margin: 0 auto;
	display: flex;
	align-items: top;
}
</style>
