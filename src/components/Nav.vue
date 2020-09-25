<template>
	<nav id="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/watch">Watch</router-link>
		<router-link v-if="!loggedIn" to="/login">Login</router-link>
		<a v-if="loggedIn" href="#!" @click.prevent="logout">Logout</a>
	</nav>
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
			this.$store.dispatch('lessons/clearCurrentLesson')
			window.location.reload()
		},
	},
}
</script>

<style lang="scss" scoped>
#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;
		margin-right: 1rem;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
