<template>
	<nav class="container">
		<router-link class="logo" to="/">
			<img src="@/assets/img/logo.svg" alt="LeadUX" />
		</router-link>

		<div class="link-wrapp">
			<router-link class="link" to="/#skills">Для кого</router-link>
			<router-link class="link" to="/#learn">Что внутри</router-link>
			<router-link class="link" to="/#faq">ЧАВО</router-link>
		</div>

		<div class="loggin-wrapp">
			<router-link class="login" v-if="!loggedIn" to="/login">Вход</router-link>
			<a class="logout" v-if="loggedIn" href="#!" @click.prevent="userLogout">
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

	.link-wrapp .link {
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
			padding: 0.8rem 1.5rem;
			border: 1px solid rgba(255, 255, 255, 0.2);
			border-radius: 10px;
			font-size: 0.95rem;
			display: inline-block;
			transition: background-color, transform 0.3s;
			&:hover {
				text-decoration: none;
				background-color: #192a68;
				transform: translateY(-2px);
			}
		}
	}
}
</style>
