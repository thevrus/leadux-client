<template>
	<div class="form">
		<div class="avatar">
			<div v-if="user.avatar">
				<img :src="host_url + user.avatar.url" alt="Avatar" class="user__img" />
			</div>
			<div class="avatar-letter" v-else>
				{{ user.username | capitalize }}
			</div>
		</div>

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
import DataService from '@/services/data.service'
import { capitalize } from '@/js/filters'

export default {
	data() {
		return {
			host_url: process.env.VUE_APP_API_URL,
			comment: '',
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		},

		user() {
			return this.$store.state.auth.user.user
		},
	},
	methods: {
		handleSubmit() {
			const cl = this.$store.getters['lessons/getCurrentLesson']

			DataService.addComment(cl.id, this.comment).then(() => {
				this.$store.dispatch('comments/loadComments')
				this.comment = ''
			})
		},
	},
	filters: {
		capitalize,
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

.avatar {
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background: linear-gradient(180deg, #93e3a0 0%, #5b8b62 100%);
	position: relative;
	overflow: hidden;
	display: inline-block;
	margin-right: 1rem;
}

.avatar-letter {
	position: absolute;
	width: 100%;
	text-align: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -46%);
	user-select: none;
	font-weight: bold;
	font-size: 1rem;
	color: #ffffff;
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
