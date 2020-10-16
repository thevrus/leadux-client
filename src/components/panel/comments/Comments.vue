<template>
	<div>
		<div v-if="!loading">
			<ul v-for="comment in comments" :key="comment.id">
				<Comment :comment="{ comment }" />
			</ul>

			<CommentForm v-if="loggedIn" />
		</div>
		<div v-else>Loading...</div>
	</div>
</template>

<script>
import Comment from '@/components/panel/comments/Comment'
import CommentForm from '@/components/panel/comments/CommentForm'
import { mapGetters, mapActions } from 'vuex'

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
		...mapGetters('auth', ['loggedIn', 'user']),
		...mapGetters('comments', { comments: 'getComments' }),
	},
	methods: {
		...mapActions('comments', ['loadComments']),
	},
	mounted() {
		this.loadComments().then(() => {
			this.loading = false
		})
	},
}
</script>

<style lang="postcss" scoped>
div {
	color: #fff;
}
</style>
