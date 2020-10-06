<template>
	<div>
		<div v-if="!loading">
			<div v-for="comment in comments" :key="comment.id">
				<Comment :comment="{ comment }" />
			</div>
			<hr />
			<form @submit.prevent="handleSubmit">
				<textarea v-model="comment" />
				<input type="submit" value="Добавить ответ" />
			</form>
		</div>
		<div v-else>Loading...</div>
	</div>
</template>

<script>
import DataService from '@/services/data.service'
import Comment from '@/components/Comment'

export default {
	components: {
		Comment,
	},
	data() {
		return {
			comment: '',
			loading: true,
		}
	},
	computed: {
		comments() {
			return this.$store.getters['comments/getComments']
		},
	},
	mounted() {
		this.$store.dispatch('comments/loadComments').then(() => {
			this.loading = false
		})
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
}
</script>

<style lang="scss" scoped>
div {
	color: #fff;
}
</style>
