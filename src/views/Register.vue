<template>
	<div class="register bg" data-bg-animate="off">
		<h3 class="register__title">Регистрация</h3>

		<p class="register__desc">
			Зарегистрируйтесь и смотрите 2 урока из курса совершенно бесплатно.
		</p>

		<form name="form" @submit.prevent="handleRegister" class="register__form">
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
				type="password"
				v-model="user.password"
				:validate="true"
			/>

			<div v-if="message" class="register__message">
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
</template>

<script>
import User from '../models/user'
import TextInput from '@/components/TextInput'
import PasswordInput from '@/components/PasswordInput'

export default {
	name: 'Register',
	metaInfo: {
		title: 'Регистрация – LeadUX',
	},
	components: {
		TextInput,
		PasswordInput,
	},
	data() {
		return {
			user: new User('', '', ''),
			submitted: false,
			successful: false,
			message: '',
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		},
	},
	methods: {
		handleRegister() {
			this.message = ''
			this.submitted = true

			if (this.user.email && this.user.username && this.user.password) {
				this.$store.dispatch('auth/register', this.user).then(
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

						this.successful = false
					}
				)
			}
		},
	},
}
</script>

<style lang="postcss" scoped>
.register {
	width: 100%;
	height: 100vh;
	padding: 0 1rem;
	overflow-y: scroll;

	&__title {
		text-align: center;
		font-weight: bold;
		font-size: 2.6rem;
		color: #f4f4f4;
		padding-top: 5rem;
		margin: 0 0 1rem 0;
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

	&__check-label {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	&__check {
		margin-right: 1rem;
	}

	&__check-info {
		font-weight: 500;
		font-size: 0.93rem;
		line-height: 140%;
		color: rgba(255, 255, 255, 0.77);
	}

	&__submit {
		width: 100%;
		padding: 1.1rem 1rem;
		font-weight: 500;
		font-size: 1.1rem;
		line-height: 120%;
		color: #f4f4f4;
		background-color: #48a161;
		border-radius: 0.75rem;
		margin-top: 2rem;
		margin-bottom: 6.8rem;
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
		margin: 0 auto 10rem;
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
