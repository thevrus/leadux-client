<template>
	<div class="form">
		<Avatar :avatar="user.avatar" :username="user.username" />

		<form @submit.prevent="handleSubmit">
			<textarea v-model="comment" />
			<div>
				<button>Отмена</button>
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
			host_url: process.env.VUE_APP_API_URL,
			comment: '',
		}
	},
	computed: {
		...mapGetters('auth', ['loggedIn', 'user']),
		...mapGetters('lessons', ['getCurrentLesson']),
	},
	methods: {
		...mapActions('comments', ['loadComments']),

		handleSubmit() {
			const cl = this.getCurrentLesson()

			DataService.addComment(cl.id, this.comment).then(() => {
				this.loadComments()
				this.comment = ''
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
	margin-bottom: 4rem;
}

form {
	textarea {
		display: block;
		width: 100%;
		margin-bottom: 1.1rem;
		box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.08);
		border-radius: 10px;
	}

	div {
		position: absolute;
		right: 0;
	}

	button {
		appearance: none;
		border: none;
		color: #616161;
		background-color: transparent;
		font-size: 14px;
		cursor: pointer;
		line-height: 1rem;
		padding: 0.6rem 1rem;
		border-radius: 10px;
	}

	input {
		appearance: none;
		background-color: #6252be;
		color: #fff;
		cursor: pointer;
		font-size: 14px;
		line-height: 1rem;
		padding: 0.6rem 1rem;
		border-radius: 10px;
	}
}
</style>
