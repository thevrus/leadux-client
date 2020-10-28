<template>
	<div>
		<Nav />

		<div class="login">
			<div class="card">
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
		</div>

		<footer>
			<p>© Leadux, 2020</p>
		</footer>
	</div>
</template>

<script>
import User from '@/models/user'
import Nav from '@/components/sections/Nav'
import TextInput from '@/components/TextInput'
import PasswordInput from '@/components/PasswordInput'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Login',
	metaInfo: {
		title: 'Логин – LeadUX',
	},
	components: {
		Nav,
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
	min-height: 100vh;
	background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4NyIgaGVpZ2h0PSIxMTI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMzUyLjI1IDU2OC45NTJMNDUwLjYyOSA0OS4zNzI1IiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcikiIHN0cm9rZS13aWR0aD0iNDgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik00NTEuMjg5IDEwOTAuNjRsOTAyLjQ3MS01MjEuMDM5IiBzdHJva2U9InVybCgjcGFpbnQxX2xpbmVhcikiIHN0cm9rZS13aWR0aD0iNDgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjY0OC43NTMiIHkxPSIxNjUuMTc5IiB4Mj0iMTM1NC40NiIgeTI9IjU3Mi43NzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcC8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMEExOUZFIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI0NTEuNTM5IiB5MT0iMTA5MS4wNyIgeDI9IjEzMzguNzEiIHkyPSI1NzguODY1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQ0RFQyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwMERENSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==');
	background-position: center 120%;
	background-repeat: no-repeat;

	.card {
		margin-top: 100px;
		background-color: #fff;
		max-width: 500px;
		margin: 6rem auto 0;
		padding: 1rem 4rem;
		border-radius: 20px;
	}

	h3 {
		text-align: center;
		font-weight: bold;
		font-size: 2.6rem;
		color: #000;
	}

	form {
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
		color: #fff;
		background-color: #000;
		border-radius: 0.75rem;
		display: block;
		width: 100%;
		border: none;
		cursor: pointer;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.8;
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
		color: #000;
		margin-bottom: 1.6rem;
	}

	.login-btn {
		padding: 0.7rem 1.75rem;
		background-color: #f2f2f2;
		border-radius: 7px;
		cursor: pointer;
		font-size: 0.93rem;
		color: #000;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.8;
		}
	}
}

footer {
	text-align: center;
	color: #fff;
	font-weight: 100;
	font-size: 0.9rem;
}
</style>
