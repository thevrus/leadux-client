<template>
	<div class="auth">
		<Nav />
		<div class="card">
			<h2>Вход</h2>

			<form name="form" @submit.prevent="handleLogin">
				<TextInput
					id="login"
					v-model="user.email"
					label="Email или Username"
					name="login"
					:required="true"
					type="text"
					class="mb1rem"
					:class="{ invalid: invalid }"
				/>

				<PasswordInput
					id="password"
					v-model="user.password"
					label="Пароль"
					name="password"
					:required="true"
					autocomplete="current-password"
					:class="{ invalid: invalid }"
				/>

				<div v-if="message" tabindex="-1" class="message">
					{{ message }}
				</div>

				<span class="forgot-link" @click="toggleChat">
					Забыл пароль?
				</span>

				<button :disabled="loading" :class="{ load: loading }">
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
			invalid: false,
			message: '',
			nextRoute: null,
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
		this.loggedIn && this.$router.push({ name: 'watch' })
		this.nextRoute = this.$route.query ? this.$route.query.nextRoute : null
	},
	methods: {
		...mapActions('auth', ['login']),

		toggleChat() {
			window.$crisp && window.$crisp.push(['do', 'chat:open'])
		},

		handleLogin() {
			this.loading = true

			if (this.user.email && this.user.password) {
				this.login(this.user).then(
					() => {
						this.nextRoute
							? this.$router.push({ name: this.nextRoute })
							: this.$router.push({ name: 'watch' })
					},
					error => {
						this.loading = false
						this.invalid = true

						let message = null
						switch (error.response.data.message[0].messages[0].id) {
							case 'Auth.form.error.invalid':
								message = 'Неверный логин или пароль.'
								break

							default:
								message =
									'Ошибка о обработке данных, обратитесть к администратору.'
						}

						this.message = message
					}
				)
			}
		},
	},
}
</script>

<style lang="postcss" scoped>
.mb1rem {
	margin-bottom: 1rem;
}

.card {
	background-color: #fff;
	max-width: 500px;
	margin: 5rem auto 8rem;
	padding: 1rem 4rem;
	border-radius: 20px;
	@media (max-width: 520px) {
		padding: 1rem;
	}
}

h2 {
	text-align: center;
	font-weight: bold;
	font-size: responsive 1.8rem 2.6rem;
	color: #000;
	margin-bottom: 1.8rem;
}

form {
	width: 100%;
	margin: 0 auto;
	position: relative;
}

.message {
	width: 100%;
	margin: 0.3rem 0 1rem;
	border-radius: 0.5rem;
	color: #df1a29;
}

button {
	padding: 1.1rem 2rem;
	margin-top: 1.25rem;
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

.forgot-link {
	color: #000;
	display: block;
	text-align: right;
	margin: 0.8rem 0;
	font-size: 0.9rem;
	transition: color 0.3s;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
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
	font-weight: 300;
	font-size: 0.9rem;
	line-height: 140%;
	color: #676767;
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

.load {
	animation: load infinite 1.3s;
	cursor: not-allowed;
}

@keyframes load {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.7;
	}
	100% {
		opacity: 1;
	}
}
</style>
