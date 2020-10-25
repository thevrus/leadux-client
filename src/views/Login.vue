<template>
	<div class="login bg" data-bg-animate="off">
		<h3>Вход</h3>

		<form name="form" @submit.prevent="handleLogin">
			<TextInput
				label="Email или Username"
				name="login"
				:required="true"
				id="login"
				type="text"
				v-model="user.email"
			/>

			<PasswordInput
				label="Пароль"
				name="password"
				:required="true"
				id="password"
				v-model="user.password"
				autocomplete="current-password"
			/>

			<div tabindex="-1" v-if="message" class="message">
				{{ message }}
			</div>

			<button :disabled="loading">
				<span class="btn">Войти</span>
			</button>
		</form>

		<div class="login-page">
			<p class="login-info">
				Я еще не зарегистрирован
			</p>

			<router-link v-if="!loggedIn" to="/register" class="login-btn">
				Регистрация
			</router-link>
		</div>
	</div>
</template>

<script>
import User from '@/models/user'
import TextInput from '@/components/TextInput'
import PasswordInput from '@/components/PasswordInput'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Login',
	metaInfo: {
		title: 'Логин – LeadUX',
	},
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
		...mapGetters('auth', ['loggedIn']),
	},
	created() {
		this.loggedIn && this.$router.push('/watch')
	},
	methods: {
		...mapActions('auth', ['login']),

		handleLogin() {
			this.loading = true

			if (this.user.email && this.user.password) {
				this.login(this.user).then(
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
	padding: 0 1rem;
	overflow: hidden;

	h3 {
		text-align: center;
		font-weight: bold;
		font-size: 2.6rem;
		color: #f4f4f4;
		padding-top: 5rem;
		margin: 0 0 1rem 0;
	}

	form {
		max-width: 372px;
		width: 100%;
		margin: 0px auto;
		position: relative;
	}

	.message {
		width: 100%;
		padding: 1rem;
		margin-bottom: 1rem;
		background-color: rgba(219, 110, 110, 04);
		border: 1px solid #e44343;
		border-radius: 0.5rem;
		color: #412929;
	}

	button {
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

	a {
		text-decoration: none;
	}

	.login-page {
		max-width: 480px;
		width: 100%;
		border-top: 1px solid rgba(255, 255, 255, 0.07);
		padding-top: 1.75rem;
		margin: 0 auto 5rem;
		text-align: center;
	}

	.login-info {
		font-weight: 500;
		font-size: 1rem;
		line-height: 140%;
		color: rgba(255, 255, 255, 0.37);
		margin-bottom: 1.6rem;
	}

	.login-btn {
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
</style>
