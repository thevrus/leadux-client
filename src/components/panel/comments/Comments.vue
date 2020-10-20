<template>
	<div>
		<div v-if="!loading">
			<CommentForm v-if="loggedIn" :lessonId="currentLesson.id" />

			<ul v-for="comment in comments" :key="comment.id">
				<Comment
					v-if="currentLesson.id === comment.lesson.id"
					:comment="{ comment }"
				/>
			</ul>
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
		...mapGetters('lessons', { currentLesson: 'getCurrentLesson' }),
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
