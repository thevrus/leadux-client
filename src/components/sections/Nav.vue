<template>
	<nav class="container">
		<router-link class="logo" to="/">
			<img src="@/assets/img/logo.svg" alt="LeadUX" />
		</router-link>

		<div class="links">
			<a href="/#skills">Для кого</a>
			<a href="/#learn">Вы научитесь</a>
			<a href="/#price">Цена</a>
		</div>

		<div class="login-wrapp">
			<router-link class="login" v-if="!loggedIn" to="/login">Вход</router-link>
			<button class="logout" v-if="loggedIn" href="#!" @click="userLogout">
				Выход
			</button>
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
		...mapActions('auth', ['logout']),
		...mapActions('lessons', ['clearCurrentLesson']),

		userLogout() {
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

	.links a {
		font-size: 1rem;
		line-height: 140%;
		display: inline-block;
		margin-right: 2rem;
		text-decoration: none;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.8;
		}
	}

	.login-wrapp {
		.login,
		.logout {
			padding: 0.8rem 1.5rem;
			border: 1px solid rgba(255, 255, 255, 0.2);
			border-radius: 10px;
			cursor: pointer;
			background-color: transparent;
			color: #fff;
			font-size: 0.95rem;
			transition: border-color 0.3s;
			text-decoration: none;

			&:hover {
				border-color: #fff;
			}
		}
	}
}
</style>
