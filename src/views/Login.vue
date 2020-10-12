<template>
	<div class="login">
		<h3 class="login__title">Вход</h3>

		<form name="form" @submit.prevent="handleLogin" class="login__form">
			<TextInput
				label="Ваш Email"
				name="email"
				autocomplete="email"
				:required="true"
				id="email"
				type="text"
				v-model="user.email"
			/>

			<PasswordInput
				label="Пароль"
				name="password"
				:required="true"
				id="password"
				type="password"
				v-model="user.password"
			/>

			<div v-if="message" class="login__message">
				{{ message }}
			</div>

			<button class="login__submit" :disabled="loading">
				<span v-show="loading"></span>
				<span class="login__btn">Войти</span>
			</button>
		</form>

		<div class="login__login">
			<p class="login__login-info">
				Я еще не зарегистрирован
			</p>

			<router-link v-if="!loggedIn" to="/register" class="login__login-btn">
				Регистрация
			</router-link>
		</div>
	</div>
</template>

<script>
import User from '@/models/user'
import TextInput from '@/components/TextInput'
import PasswordInput from '@/components/PasswordInput'

export default {
	name: 'Login',
	components: {
		TextInput,
		PasswordInput,
	},
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
		this.loggedIn && this.$router.push('/watch')
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

<style lang="postcss" scoped>
.login {
	width: 100%;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0 1rem;

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
</style>
