<template>
	<nav class="container">
		<router-link class="logo" to="/">
			<img src="@/assets/img/logo.svg" alt="LeadUX" />
		</router-link>

		<div class="link-wrapp">
			<a href="#">Для кого</a>
			<a href="#">Что внутри</a>
			<a href="#">ЧАВО</a>
		</div>

		<div class="loggin-wrapp">
			<router-link class="login" v-if="!loggedIn" to="/login">Вход</router-link>
			<a class="logout" v-if="loggedIn" href="#!" @click.prevent="logout">
				Выход
			</a>
		</div>
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
nav {
	display: flex;
	justify-content: space-between;
	align-items: center;

	.link-wrapp a {
		font-weight: bold;
		font-size: 1rem;
		line-height: 140%;
		display: inline-block;
		margin-right: 2rem;
		color: #d9d9d9;
		transition: transform 0.3s;

		&:hover {
			transform: translateY(-2px);
			text-decoration: none;
		}
	}

	.loggin-wrapp {
		.login,
		.logout {
			padding: 1rem 1.5rem;
			border: 1px solid rgba(255, 255, 255, 0.2);
			border-radius: 10px;
			font-size: 0.95rem;
			transition: background-color 0.3s;
			&:hover {
				text-decoration: none;
				background-color: #313131;
			}
		}
	}
}
</style>
