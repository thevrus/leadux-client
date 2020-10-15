<template>
	<nav id="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/watch">Watch</router-link>
		<router-link to="/pay">Pay</router-link>
		<router-link v-if="!loggedIn" to="/login">Login</router-link>
		<a v-if="loggedIn" href="#!" @click.prevent="logout">Logout</a>
	</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapGetters('auth', ['loggedIn']),
	},
	created() {
		this.loggedIn ? true : false
	},
	methods: {
		...mapActions('auth', ['loadComlogoutments']),
		...mapActions('lessons', ['clearCurrentLesson']),

		logout() {
			this.logout()
			this.clearCurrentLesson()
			window.location.reload()
		},
	},
}
</script>

<style lang="postcss" scoped>
#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #6c7279;
		margin-right: 1rem;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
