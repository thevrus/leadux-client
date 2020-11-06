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
				<router-link class="login" v-if="!loggedIn" to="/login"
					>Вход</router-link
				>
				<button class="logout" v-if="loggedIn" href="#!" @click="userLogout">
					Выход
				</button>
			</div>
			<div class="burger-wrap">
				<button class="btn" @click="isOpened = !isOpened">
					<div class="burger" :class="{ burgerOpen: isOpened }"></div>
				</button>

				<transition name="fade">
					<ul class="list" v-if="isOpened">
						<li class="list-item">
							<router-link class="link" to="/#skills">Для кого</router-link>
						</li>
						<li class="list-item">
							<router-link class="link" to="/#learn">Что внутри</router-link>
						</li>
						<li class="list-item">
							<router-link class="link" to="/#faq">ЧАВО</router-link>
						</li>
					</ul>
				</transition>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			isOpened: false,
		}
	},
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

	.burger-wrap {
		position: relative;
		display: none;
		margin-left: 1.5rem;
		@media (max-width: 768px) {
			& {
				display: block;
			}
		}

		.btn {
			border: none;
			outline: none;
			background-color: transparent;
			cursor: pointer;
			appearance: none;
		}
		.burger {
			width: 32px;
			height: 1.5px;
			display: block;
			border-radius: 8px;
			margin-bottom: 10px;
			background-color: #fff;
			position: relative;
			transition: all 0.3s;
			&::after {
				content: '';
				width: 32px;
				height: 1.5px;
				display: block;
				border-radius: 8px;
				background-color: #fff;
				position: absolute;
				left: 0;
				top: 10px;
			}
		}

		.burgerOpen {
			width: 32px;
			height: 1.5px;
			display: block;
			border-radius: 8px;
			transform: rotate(-45deg);
			background-color: #fff;
			margin-top: 8px;
			position: relative;
			&::after {
				content: '';
				width: 32px;
				height: 1.5px;
				display: block;
				border-radius: 8px;
				background-color: #fff;
				transform: rotate(90deg);
				position: absolute;
				left: 0;
				top: 0;
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
			right: -18px;
			z-index: 10;
			width: 100vw;
			background: radial-gradient(
				48.2% 35.86% at 100% 0%,
				rgba(0, 87, 217, 0.6) 0%,
				rgba(0, 102, 255, 0) 100%
			);
			background-color: #192a68;

			.list-item {
				margin: 0.5rem 0;
			}
		}
	}
}
</style>
