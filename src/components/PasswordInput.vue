<template>
	<div>
		<input
			:id="id"
			:name="name"
			:type="type"
			:autocomplete="autocomplete"
			placeholder=" "
			class="input"
			aria-describedby="password-constraints"
			:required="required"
			ref="passwordInput"
			:value="value"
			@input="onInput"
		/>
		<label for="password">
			{{ label }}
		</label>

		<button
			id="login-toggle-password"
			ref="togglePasswordButton"
			@click.prevent="togglePassword"
			type="button"
			aria-label="Show password as plain text. Warning: this will display your password on the screen."
		></button>
	</div>
</template>

<script>
export default {
	props: [
		'id',
		'name',
		'type',
		'autocomplete',
		'required',
		'label',
		'value',
		'validate',
	],
	methods: {
		onInput(event) {
			this.$emit('input', event.target.value)
			this.validate && this.validatePassword()
		},
		togglePassword() {
			if (this.$refs.passwordInput.value) {
				if (this.$refs.passwordInput.type === 'password') {
					this.$refs.passwordInput.type = 'text'
					this.$refs.togglePasswordButton.style.opacity = 1
					this.$refs.togglePasswordButton.setAttribute(
						'aria-label',
						'Скрыть пароль.'
					)
				} else {
					this.$refs.passwordInput.type = 'password'
					this.$refs.togglePasswordButton.style.opacity = 0.2
					this.$refs.togglePasswordButton.setAttribute(
						'aria-label',
						'Показать пароль как обычный текст. ' +
							'Внимание: это действие выведет Ваш пароль на екран.'
					)
				}
			}
		},
		validatePassword() {
			let message = ''
			let value = this.$refs.passwordInput.value

			if (!/.{6,}/.test(value)) {
				message = 'Пароль должен содержать минимум 6 символов. '
			}

			if (!/.*[A-Z].*/.test(value)) {
				message +=
					'\nПароль должен содержать как минимум одну заглавную букву. '
			}

			if (!/.*[a-z].*/.test(value)) {
				message += '\nПароль должен содержать как минимум одну строчную букву.'
			}

			this.$refs.passwordInput.setCustomValidity(message)
		},
	},
}
</script>

<style lang="scss" scoped>
div {
	position: relative;
}

.input {
	padding: 1.7rem 1.5rem 0.7rem 1.5rem;
	width: 100%;
}

input:focus ~ label {
	top: 0.6rem;
	font-size: 0.8rem;
}

input:not(:placeholder-shown).input:not(:focus) + label {
	top: 0.6rem;
	font-size: 0.8rem;
}

input:not(:focus):invalid {
	color: red;
}

input[type='password']:valid + label {
	color: green;
}

label {
	position: absolute;
	top: 1.1rem;
	left: 1.5rem;
	font-weight: 500;
	font-size: 1.1rem;
	line-height: 140%;
	color: rgba(0, 0, 0, 0.38);
	transition: all 0.3s;
}

button {
	appearance: none;
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
</style>
