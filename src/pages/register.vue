<template>
	<div class="auth">
		<Nav />

		<div class="card">
			<h2>Регистрация</h2>

			<h3>
				Зарегистрируйтесь и смотрите 2 урока из курса совершенно бесплатно.
			</h3>

			<form name="form" @submit.prevent="handleRegister">
				<TextInput
					id="username"
					v-model="user.username"
					label="Имя пользователя"
					name="username"
					:required="true"
					type="text"
					class="mb1rem"
				/>

				<TextInput
					id="email"
					v-model="user.email"
					:class="{ invalid: invalidMail }"
					label="Ваш Email"
					name="email"
					autocomplete="email"
					:required="true"
					type="email"
					class="mb1rem"
				/>

				<PasswordInput
					id="password"
					v-model="user.password"
					label="Пароль"
					name="password"
					:required="true"
					:validate="true"
					autocomplete="new-password"
					:class="{ invalid: invalidPass }"
					class="mb1rem"
				/>

				<div v-if="message" tabindex="-1" class="message">
					{{ message }}
				</div>

				<!--
					<label class="check-label">
						<input type="checkbox" class="check" />
						<span class="check-info">
							Я хочу получать уведомления о специальных предложениях и скидках.
						</span>
					</label>
					-->

				<button :disabled="loading" :class="{ load: loading }" class="submit">
					Зapeгиcтpиpoвaтьcя
				</button>
			</form>
			<div class="login">
				<p class="login-info">
					Я уже зарегистрирован
				</p>

				<router-link v-if="!loggedIn" to="/login" class="login-btn">
					Войти
				</router-link>
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
			loading: false,
			submitted: false,
			successful: false,
			nextRoute: null,
			invalidMail: false,
			invalidPass: false,
			message: '',
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
		...mapActions('auth', ['register']),

		handleRegister() {
			this.message = ''
			this.submitted = true
			this.loading = true

			if (this.user.email && this.user.username && this.user.password) {
				this.register(this.user).then(
					() => {
						this.nextRoute
							? this.$router.push(this.nextRoute)
							: this.$router.push('/watch')

						this.successful = true
					},
					error => {
						this.loading = false
						let message = null
						switch (error.response.data.message[0].messages[0].id) {
							case 'Auth.form.error.email.taken':
								message = 'Данный e-mail уже занят!'
								this.invalidMail = true
								break

							case 'Auth.form.error.username.taken':
								message = 'Данное имя пользователя уже занято!'
								this.invalidPass = true
								break
						}

						this.message = message
						this.successful = false
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
	margin-top: 1rem;
	margin-bottom: 0;
}

h3 {
	font-weight: 500;
	font-size: responsive 1rem 1.1rem;
	line-height: 140%;
	color: #000;
	text-align: center;
	margin: 0.5rem 0 1.8rem;
}

form {
	max-width: 372px;
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

.check-label {
	display: flex;
	align-items: center;
	cursor: pointer;
	margin-top: 1.25rem;
}

.check {
	margin-right: 1rem;
}

.check-info {
	font-weight: 500;
	font-size: 0.93rem;
	line-height: 140%;
	vertical-align: top;
	color: #000;
	margin-bottom: 1.2rem;
}

.submit {
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

.login {
	padding-top: 1.75rem;
	text-align: center;
	margin-bottom: 2rem;

	a {
		text-decoration: none;
	}

	&-info {
		font-weight: 300;
		font-size: 0.9rem;
		line-height: 140%;
		color: #676767;
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
