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
			<div class="logginLogut">
				<router-link class="login" v-if="!loggedIn" to="/login">
					Вход
				</router-link>

				<button class="logout" v-if="loggedIn" href="#!" @click="userLogout">
					Выход
				</button>
			</div>

			<button
				class="btn"
				@click="openMenu"
				:aria-label="isOpened ? 'Закрыть меню' : 'Открыть меню'"
			></button>
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

	.links {
		@media (max-width: 768px) {
			& {
				display: none;
			}
		}

		a {
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
	}

	.login-wrapp {
		display: flex;
		align-items: center;
	}

	.logginLogut {
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

	.btn {
		border: none;
		outline: none;
		background-color: transparent;
		cursor: pointer;
		appearance: none;
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
