<template>
	<div class="form">
		<Avatar :avatar="user.avatar" :username="user.username" />

		<form @submit.prevent="handleSubmit">
			<textarea v-model="text" placeholder="Задайте вопрос" />
			<div>
				<input type="reset" value="Отмена" @click="resetForm" />
				<input type="submit" value="Задать вопрос" />
			</div>
		</form>
	</div>
</template>

<script>
import Avatar from '@/components/Avatar'
import DataService from '@/services/data.service'
import { mapGetters, mapActions } from 'vuex'

export default {
	components: {
		Avatar,
	},
	data() {
		return {
			text: '',
		}
	},
	props: {
		lessonId: {
			required: true,
		},
	},
	computed: {
		...mapGetters('auth', ['loggedIn', 'user']),
	},
	methods: {
		...mapActions('questions', ['getQuestions']),

		handleSubmit() {
			if (!this.text) return

			DataService.addQuestion(this.lessonId, this.text).then(() => {
				this.getQuestions()
				this.text = ''
			})
		},
		resetForm() {
			this.$emit('resetForm')
		},
	},
}
</script>

<style lang="postcss" scoped>
.form {
	position: relative;
	display: grid;
	grid-template-columns: 42px 1fr;
	grid-gap: 2%;
	margin-bottom: 2.5rem;
}

form {
	textarea {
		width: 100%;
		margin-bottom: 1.1rem;
		border-radius: 6px;
		padding: 0.5rem 0.75rem;
		outline: none;
		border: none;
		color: #fff;
		background-color: #23242a;
		font-family: system-ui;
	}

	div {
		position: absolute;
		right: 0;
		margin-bottom: -20px;
	}

	input[type='reset'] {
		appearance: none;
		border: none;
		color: #616161;
		background-color: transparent;
		font-size: 14px;
		cursor: pointer;
		line-height: 1rem;
		padding: 0.6rem 1rem;
		border-radius: 10px;
		margin-right: 0.5rem;
	}

	input {
		appearance: none;
		background-color: var(--secondary);
		color: #fff;
		cursor: pointer;
		font-size: 14px;
		line-height: 1rem;
		padding: 0.6rem 1rem;
		border-radius: 10px;
		border: none;
	}
}
</style>
