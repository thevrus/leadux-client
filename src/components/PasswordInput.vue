<template>
	<div>
		<input
			:id="id"
			:name="name"
			:autocomplete="autocomplete"
			placeholder=" "
			class="input"
			type="password"
			aria-describedby="password-constraints"
			:required="required"
			ref="passwordInput"
			:value="value"
			@input="onInput"
		/>
		<label :for="id">
			{{ label }}
		</label>

		<button
			ref="togglePasswordButton"
			@click="togglePassword"
			type="button"
			aria-label="Показать пароль"
		></button>
	</div>
</template>

<script>
export default {
	props: [
		'id',
		'name',
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

<style lang="postcss" scoped>
div {
	position: relative;
}

input {
	padding: 1.7rem 1.5rem 0.7rem 1.5rem;
	width: 100%;
	outline: none;
	border-radius: 0.7rem;
	font-weight: bold;
	color: #434343;
	border: 1px solid transparent;
	background-color: #f5f5f5;
	outline-color: #222e4f;
}

input:focus ~ label {
	top: 0.6rem;
	font-size: 0.8rem;
}

input:not(:placeholder-shown).input:not(:focus) + label {
	top: 0.6rem;
	font-size: 0.8rem;
}

label {
	position: absolute;
	user-select: none;
	top: 1.1rem;
	left: 1.5rem;
	font-weight: 500;
	font-size: 1.1rem;
	line-height: 140%;
	color: rgba(0, 0, 0, 0.4);
	transition: all 0.3s;
}

button {
	appearance: none;
	border: none;
	outline: none;
	width: 1.25rem;
	height: 1rem;
	background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjkxNiA3LjZDMTcuODk4IDIuOTEgMTQuMSAwIDEwIDBTMi4xMDMgMi45MS4wODMgNy42YTEgMSAwIDAwMCAuOEMyLjEwMyAxMy4wOSA1LjkwMSAxNiAxMCAxNnM3Ljg5Ny0yLjkxIDkuOTE2LTcuNmExIDEgMCAwMDAtLjh6TTEwIDE0Yy0zLjE2OSAwLTYuMTY4LTIuMjktNy44OTctNkMzLjgzMyA0LjI5IDYuODMgMiAxMCAyYzMuMTY5IDAgNi4xNjggMi4yOSA3Ljg5NyA2LTEuNzMgMy43MS00LjcyOCA2LTcuODk3IDZ6bTAtMTBhMy45OTggMy45OTggMCAwMC0zLjkyMiA0Ljc4IDQgNCAwIDAwNS40NTIgMi45MTUgMy45OTggMy45OTggMCAwMDEuMjk3LTYuNTIzQTMuOTk4IDMuOTk4IDAgMDAxMCA0em0wIDZhMS45OTkgMS45OTkgMCAxMTAtMy45OThBMS45OTkgMS45OTkgMCAwMTEwIDEweiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNyIvPjwvc3ZnPg==');
	background-size: cover;
	position: absolute;
	top: 1.4rem;
	right: 1.4rem;
	opacity: 0.2;
	cursor: pointer;
	transition: opacity 0.2s;
}
</style>
