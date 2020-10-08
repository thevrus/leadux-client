<template>
	<div>
		<div v-if="!loading">
			<ul v-for="comment in comments" :key="comment.id">
				<Comment :comment="{ comment }" />
			</ul>

			<CommentForm />
		</div>
		<div v-else>Loading...</div>
	</div>
</template>

<script>
import Comment from '@/components/Comment'
import CommentForm from '@/components/CommentForm'

export default {
	components: {
		Comment,
		CommentForm,
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
}
</script>

<style lang="scss" scoped>
div {
	color: #fff;
}
</style>
