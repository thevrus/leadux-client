<template>
	<nav class="nav container">
		<router-link class="logo" to="/">
			<img src="@/assets/img/logo.svg" alt="LeadUX" />
		</router-link>

		<div class="links">
			<a href="/#skills">Для кого</a>
			<a href="/#learn">Вы научитесь</a>
			<a href="/#price">Цена</a>
		</div>

		<div class="auth">
			<router-link v-if="loggedIn" to="/watch" class="watch">
				Личный кабинет
			</router-link>

			<button v-if="loggedIn" class="logout" @click="userLogout">Выход</button>
			<router-link v-else class="login" to="/login"> Вход </router-link>
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
.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;

	.links {
		@media (max-width: 768px) {
			& {
				display: none;
			}
		}

		a {
			font-family: Freigeist-XWideBold;
			font-size: 0.9rem;
			display: inline-block;
			margin-right: 2rem;
			color: #dadada;
			transition: transform 0.3s;
			text-decoration: none;
			transition: color 0.3s;

			&:hover {
				color: #fff;
			}
		}
	}

	.auth {
		display: flex;
		align-items: center;

		.watch {
			margin-right: 1.4rem;
			font-weight: 500;
			font-size: 0.95rem;
			line-height: 140%;
			padding: 0.8rem 1.5rem;
			background: rgba(0, 0, 0, 0.12);
			border-radius: 10px;
			cursor: pointer;
			text-decoration: none;
			border: 1px solid transparent;
			transition: border-color 0.3s;

			&:hover {
				border-color: #fff;
			}

			@media (max-width: 900px) {
				display: none;
			}
		}

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

	.list {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0.5rem 0;
		position: absolute;
		top: 36px;
		right: -21px;
		z-index: 10;
		width: 103vw;
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(28px);

		.list-item {
			margin: 0.5rem 0;

			a {
				width: 100%;
			}
		}
	}
}
</style>
