<template>
	<div class="form">
		<Avatar :avatar="user.avatar" :username="user.username" />

		<form @submit.prevent="handleSubmit">
			<textarea v-model="text" placeholder="Добавьте ответ" />
			<div>
				<input type="reset" value="Отмена" />
				<input type="submit" value="Добавить ответ" />
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

			DataService.addAnswer(this.lessonId, this.text).then(() => {
				this.getQuestions()
				this.text = ''
			})
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
	margin-bottom: 1.6rem;
	padding: 1.6rem 0;
	border-top: 1px solid #262626;
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
	input {
		appearance: none;
		background-color: var(--secondary);
		color: #fff;
		cursor: pointer;
		font-size: 14px;
		line-height: 1rem;
		padding: 0.6rem 1rem;
		border-radius: 10px;
		outline: none;
		border: 1px solid transparent;
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
}
</style>
