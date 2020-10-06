<template>
	<div>
		<div class="login">
			<h3 class="login__title">Вход</h3>

			<form name="form" @submit.prevent="handleLogin" class="login__form">
				<section class="login__email">
					<input
						v-model="user.email"
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						placeholder=" "
						class="login__email-input inputs"
						required
					/>
					<label for="email" class="login__email-label">Ваш Email</label>
				</section>

				<section class="login__password">
					<input
						v-model="user.password"
						id="login-password"
						name="password"
						type="password"
						autocomplete="password"
						placeholder=" "
						aria-describedby="password-constraints"
						class="login__password-input inputs"
						required
					/>
					<label for="password" class="login__password-label">Пароль</label>
					<button
						id="login-toggle-password"
						class="login__toggle-password"
						type="button"
						aria-label="Show password as plain text. Warning: this will display your password on the screen."
					></button>
				</section>

				<div v-if="message" class="login__message">
					{{ message }}
				</div>

				<button class="login__submit" :disabled="loading">
					<span v-show="loading"></span>
					<span class="login__btn">Войти</span>
				</button>
			</form>
			<div class="login__login">
				<p class="login__login-info">Я еще не зарегистрирован</p>

				<router-link v-if="!loggedIn" to="/register" class="login__login-btn"
					>Регистрация</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import User from '../models/user'

export default {
	name: 'Login',
	data() {
		return {
			user: new User('', ''),
			loading: false,
			message: '',
			errors: {
				error: '',
				email: '',
				password: '',
			},
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		},
	},
	created() {
		this.loggedIn && this.$router.push('/')
	},

	mounted() {
		const passwordInput = document.querySelector('input#login-password')
		const togglePasswordButton = document.querySelector(
			'button#login-toggle-password'
		)

		togglePasswordButton.addEventListener('click', togglePassword)

		function togglePassword() {
			if (passwordInput.value) {
				if (passwordInput.type === 'password') {
					passwordInput.type = 'text'
					togglePasswordButton.style.opacity = 1
					togglePasswordButton.setAttribute('aria-label', 'Скрыть пароль.')
				} else {
					passwordInput.type = 'password'
					togglePasswordButton.style.opacity = 0.2
					togglePasswordButton.setAttribute(
						'aria-label',
						'Показать пароль как обычный текст. ' +
							'Внимание: это действие выведет Ваш пароль на екран.'
					)
				}
			}
		}
	},
	methods: {
		handleLogin() {
			this.loading = true

			if (this.user.email && this.user.password) {
				this.$store.dispatch('auth/login', this.user).then(
					() => {
						this.$router.push('/watch')
					},
					error => {
						this.loading = false
						this.message =
							(error.response && error.response.data) ||
							error.message ||
							error.toString()
					}
				)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
// Animate bg
div.bg {
	height: 100vh;
	margin-left: -40px;
	margin-right: -40px;
}

@media (prefers-reduced-motion: no-preference) {
	.bg {
		will-change: background-position;
	}
}

.bg {
	background-repeat: no-repeat;
	background-position: center;

	--bg-gradient-stop-1: #262626;
	--bg-gradient-stop-2: #1b3699;
	--bg-gradient-stop-3: #262626;

	background-color: var(--bg-gradient-stop-1);
	background-image: radial-gradient(
			ellipse at 90% 30%,
			var(--bg-gradient-stop-1) 20%,
			transparent 50%
		),
		radial-gradient(
			ellipse at 70% 0%,
			var(--bg-gradient-stop-2) 0%,
			transparent 50%
		),
		radial-gradient(
			ellipse at 20% 10%,
			var(--bg-gradient-stop-3) 10%,
			transparent 70%
		),
		radial-gradient(
			ellipse at 50% 100%,
			var(--bg-gradient-stop-2) 0%,
			transparent 50%
		);
	background-size: 200% 100%;
}

@media (prefers-reduced-motion: no-preference) {
	.bg {
		background-size: 400% 200%;
		background-position: 0% 0%;
		animation: bg-gradient-anim-1 30s linear infinite;
	}
}

@keyframes bg-gradient-anim-1 {
	0%,
	100% {
		background-position: 0% 0%;
	}
	25% {
		background-position: 100% 100%;
	}
	50% {
		background-position: 100% 0%;
	}
	75% {
		background-position: 0% 100%;
	}
}
// Animate bg

.login {
	width: 100%;
	height: 100vh;
	margin: 0 auto;

	&__title {
		text-align: center;
		font-weight: bold;
		font-size: 2.6rem;
		line-height: 120%;
		color: #f4f4f4;
		margin-top: 5rem;
		margin-bottom: 1rem;
	}

	&__desc {
		width: 100%;
		max-width: 29rem;
		font-weight: 500;
		font-size: 1.1rem;
		line-height: 140%;
		color: #fffdcb;
		margin: 0 auto 3rem;
		text-align: center;
	}

	&__form {
		max-width: 372px;
		width: 100%;
		margin: 0px auto;
		position: relative;
	}

	&__email,
	&__password {
		position: relative;
	}

	section input:focus ~ label {
		top: 0.6rem;
		font-size: 0.8rem;
	}

	&__email-input:not(:placeholder-shown).login__email-input:not(:focus)
		+ &__email-label,
	&__password-input:not(:placeholder-shown).login__password-input:not(:focus)
		+ &__password-label {
		top: 0.6rem;
		font-size: 0.8rem;
	}

	input[type='email']:not(:focus):invalid,
	input[type='password']:not(:focus):invalid {
		color: red;
	}
	input[type='email']:valid + label,
	input[type='password']:valid + label {
		color: green;
	}

	&__email-label,
	&__password-label {
		position: absolute;
		top: 1.1rem;
		left: 1.5rem;
		font-weight: 500;
		font-size: 1.1rem;
		line-height: 140%;
		color: rgba(0, 0, 0, 0.38);
		transition: all 0.3s;
	}

	&__toggle-password {
		border: none;
		outline: none;
		width: 1.25rem;
		height: 1rem;
		background-image: url('../assets/pass-view.svg');
		background-size: cover;
		position: absolute;
		top: 1.4rem;
		right: 1.4rem;
		opacity: 0.2;
		cursor: pointer;
		transition: opacity 0.2s;
	}

	&__message {
		width: 100%;
		padding: 1rem;
		margin-bottom: 1rem;
		background-color: rgba(219, 110, 110, 04);
		border: 1px solid #e44343;
		border-radius: 0.5rem;
		color: #412929;
	}

	&__submit {
		padding: 1.1rem 2rem;
		font-weight: 500;
		font-size: 1.1rem;
		line-height: 120%;
		color: #f4f4f4;
		background-color: #48a161;
		border-radius: 0.75rem;
		display: block;
		margin: 2rem auto;
		border: none;
		cursor: pointer;
		transition: background-color 0.3s;

		&:hover {
			background-color: #318f4b;
		}
	}

	&__login {
		max-width: 480px;
		width: 100%;
		border-top: 1px solid rgba(255, 255, 255, 0.07);
		padding-top: 1.75rem;
		margin: 0 auto 5rem;
		text-align: center;
		&-info {
			font-weight: 500;
			font-size: 1rem;
			line-height: 140%;
			color: rgba(255, 255, 255, 0.37);
			margin-bottom: 1.6rem;
		}

		&-btn {
			padding: 0.7rem 1.75rem;
			background-color: rgba(255, 255, 255, 0.04);
			border-radius: 7px;
			cursor: pointer;
			font-size: 0.93rem;
			color: rgba(255, 255, 255, 0.6);
			transition: color, background-color 0.3s;
			&:hover {
				color: rgba(255, 255, 255, 0.4);
				background-color: rgba(255, 255, 255, 0.1);
			}
		}
	}
}

.inputs {
	width: 100%;
	padding: 1.7rem 1.5rem 0.7rem 1.5rem;
	border-radius: 0.7rem;
	font-weight: bold;
	font-size: 0.88rem;
	line-height: 140%;
	color: #434343;
	border: 1px solid transparent;
	margin-bottom: 1.25rem;
	background-color: rgba(255, 255, 255, 0.9);
	outline-color: #222e4f;
}
</style>
