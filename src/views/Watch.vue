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
import Player from '@/components/Player'
import Playlist from '@/components/Playlist'
import NavWatch from '@/components/NavWatch'
import DataService from '@/services/data.service'

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
	width: 100%;
}
</style>
