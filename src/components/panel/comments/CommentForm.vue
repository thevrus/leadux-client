<template>
	<div class="form">
		<Avatar :avatar="user.avatar" :username="user.username" />

		<form @submit.prevent="handleSubmit">
			<textarea v-model="comment" />
			<div>
				<input type="reset" value="Отмена" />
				<input
					type="submit"
					value="Добавить ответ"
					placeholder="Добавить комментарий"
				/>
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
	props: {
		lessonId: {
			type: String,
			required: true,
		},
	},
	computed: {
		...mapGetters('auth', ['loggedIn', 'user']),
	},
	methods: {
		...mapActions('comments', ['loadComments']),

		handleSubmit() {
			DataService.addComment(this.lessonId, this.comment).then(() => {
				this.loadComments()
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
	margin-bottom: 2.5rem;
}

form {
	textarea {
		display: block;
		width: 100%;
		margin-bottom: 1.1rem;
		box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.08);
		border-radius: 10px;
		/* max-height: 3rem; */
		font-family: Freigeist;
		font-style: normal;
		font-weight: 500;
		font-size: 1rem;
		padding: 0.5rem 0.75rem;
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