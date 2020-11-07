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
				<button class="btn" @click="openMenu">
					<div class="overlay" v-if="isOpened"></div>
					<div class="burger" :class="{ burgerOpen: isOpened }"></div>
				</button>
				<transition name="fade">
					<ul class="list" v-if="isOpened" @click="closeMenu">
						<li class="list-item">
							<a href="/#skills">Для кого</a>
						</li>
						<li class="list-item">
							<a href="/#learn">Вы научитесь</a>
						</li>
						<li class="list-item">
							<a href="/#price">Цена</a>
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

		openMenu() {
			this.isOpened = !this.isOpened
			if (this.isOpened) {
				document.body.style.overflow = 'hidden'
			} else {
				document.body.style.overflow = 'initial'
			}
		},

		closeMenu(e) {
			if (e.target.hash) {
				this.isOpened = false
				document.body.style.overflow = 'initial'
			}
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

		.overlay {
			background-color: #000;
			opacity: 0.6;
			width: 100vw;
			height: 100vh;
			position: fixed;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 9;
		}

		.btn {
			border: none;
			outline: none;
			background-color: transparent;
			cursor: pointer;
			appearance: none;
		}
		.burger {
			z-index: 10;
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
			padding: 0.5rem 0px;
			position: absolute;
			top: 36px;
			right: -21px;
			z-index: 10;
			width: 103vw;
			background: radial-gradient(
				48.2% 35.86% at 100% 0%,
				rgba(0, 87, 217, 0.6) 0%,
				rgba(0, 102, 255, 0) 100%
			);
			background-color: #192a68;

			.list-item {
				margin: 0.5rem 0;
				a {
					width: 100%;
				}
			}
		}
	}
}
</style>
