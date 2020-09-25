<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/lesson"> | Watch</router-link>
			<router-link v-if="!loggedIn" to="/login"> | Login</router-link>
			<a v-if="loggedIn" href="#!" @click.prevent="logout"> | Logout</a>
		</div>
		<router-view />
	</div>
</template>

<script>
export default {
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		},
	},
	created() {
		this.loggedIn ? true : false
	},
	methods: {
		logout() {
			this.$store.dispatch('auth/logout')
			window.location.reload()
		},
	},
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
