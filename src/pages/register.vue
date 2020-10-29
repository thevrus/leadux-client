<template>
	<div>
		<Nav />

		<div class="register">
			<div class="card">
				<h3>Регистрация</h3>

				<h4>
					Зарегистрируйтесь и смотрите 2 урока из курса совершенно бесплатно.
				</h4>

				<form name="form" @submit.prevent="handleRegister">
					<TextInput
						label="Имя пользователя"
						name="username"
						:required="true"
						id="username"
						type="text"
						v-model="user.username"
					/>

					<TextInput
						label="Ваш Email"
						name="email"
						autocomplete="email"
						:required="true"
						id="email"
						type="email"
						v-model="user.email"
					/>

					<PasswordInput
						label="Пароль"
						name="password"
						:required="true"
						id="password"
						v-model="user.password"
						:validate="true"
						autocomplete="new-password"
						:class="{ invalid: invalid }"
					/>

					<div tabindex="-1" v-if="message" class="register__message">
						{{ message }}
					</div>

					<label class="register__check-label">
						<input type="checkbox" class="register__check" />
						<span class="register__check-info">
							Я хочу получать уведомления о специальных предложениях и скидках.
						</span>
					</label>

					<button class="register__submit">Зapeгиcтpиpoвaтьcя</button>
				</form>
				<div class="register__login">
					<p class="register__login-info">
						Я уже зарегистрирован
					</p>

					<router-link v-if="!loggedIn" to="/login" class="register__login-btn">
						Войти
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
import User from '../models/user'
import Nav from '@/components/sections/Nav'
import TextInput from '@/components/TextInput'
import PasswordInput from '@/components/PasswordInput'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Register',
	metaInfo: {
		title: 'Регистрация – LeadUX',
	},
	components: {
		Nav,
		TextInput,
		PasswordInput,
	},
	data() {
		return {
			user: new User('', '', ''),
			submitted: false,
			successful: false,
			invalid: false,
			message: '',
		}
	},
	computed: {
		...mapGetters('auth', ['loggedIn']),
	},
	methods: {
		...mapActions('auth', ['register']),

		handleRegister() {
			this.message = ''
			this.submitted = true

			if (this.user.email && this.user.username && this.user.password) {
				this.register(this.user).then(
					() => {
						this.$router.push('/watch')
						this.successful = true
					},
					error => {
						let message = null
						switch (error.response.data.message[0].messages[0].id) {
							case 'Auth.form.error.email.taken':
								message = 'Данный e-mail уже занят!'
								break

							case 'Auth.form.error.username.taken':
								message = 'Данное имя пользователя уже занято!'
								break
						}

						this.message = message
						this.invalid = true
						this.successful = false
					}
				)
			}
		},
	},
}
</script>

<style lang="postcss" scoped>
.invalid {
	border: 2px solid #df1a29;
	border-radius: 10px;
}
.register {
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
		margin-bottom: 0;
	}

	h4 {
		font-weight: 500;
		font-size: 1.1rem;
		line-height: 140%;
		color: #000;
		text-align: center;
		margin: 0.5rem 0 1.8rem;
	}

	form {
		max-width: 372px;
		width: 100%;
		margin: 0px auto;
		position: relative;
	}

	&__message {
		width: 100%;
		margin: 0.3rem 0 1rem;
		border-radius: 0.5rem;
		color: #df1a29;
	}

	&__check-label {
		display: flex;
		align-items: center;
		cursor: pointer;
		margin-top: 1.25rem;
	}

	&__check {
		margin-right: 1rem;
	}

	&__check-info {
		font-weight: 500;
		font-size: 0.93rem;
		line-height: 140%;
		vertical-align: top;
		color: #000;
		margin-bottom: 1.2rem;
	}

	&__submit {
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

	&__login {
		padding-top: 1.75rem;
		text-align: center;
		margin-bottom: 2rem;

		a {
			text-decoration: none;
		}

		&-info {
			font-weight: 500;
			font-size: 1rem;
			line-height: 140%;
			color: #000;
			margin-bottom: 1.6rem;
		}

		&-btn {
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
}

footer {
	text-align: center;
	color: #fff;
	font-weight: 100;
	font-size: 0.9rem;
}
</style>
