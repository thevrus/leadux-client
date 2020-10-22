<template>
	<div>
		<div v-if="!loading">
			<button @click="addQuestion = !addQuestion" v-show="!addQuestion">
				Задать вопрос
			</button>

			<QuestionForm
				v-show="addQuestion"
				v-if="loggedIn"
				:lessonId="currentLesson.id"
				@resetForm="addQuestion = !addQuestion"
			/>

			<span class="questions-counter"> {{ questionsLength }} вопросов: </span>

			<ul>
				<transition-group name="fade" tag="li">
					<div v-for="comment in comments" :key="comment.id">
						<Question
							v-if="currentLesson.id === comment.lesson.id"
							:comment="comment"
						/>
					</div>
				</transition-group>
			</ul>
		</div>
		<div v-else>Loading...</div>
	</div>
</template>

<script>
import Question from '@/components/panel/questions/Question'
import QuestionForm from '@/components/panel/questions/QuestionForm'
import { mapGetters, mapActions } from 'vuex'

export default {
	components: {
		Question,
		QuestionForm,
	},
	data() {
		return {
			comment: '',
			addQuestion: false,
			loading: true,
		}
	},
	computed: {
		...mapGetters('auth', ['loggedIn', 'user']),
		...mapGetters('comments', { comments: 'getComments' }),
		...mapGetters('lessons', { currentLesson: 'getCurrentLesson' }),

		questionsLength() {
			let counter = 0

			this.comments.forEach(comment => {
				if (this.currentLesson.id === comment.lesson.id) counter++
			})

			return counter
		},
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
button {
	appearance: none;
	background-color: var(--secondary);
	color: #fff;
	cursor: pointer;
	font-size: 14px;
	line-height: 1rem;
	padding: 0.6rem 1rem;
	border-radius: 10px;
	outline: none;
	border: none;
	float: right;
	font-weight: bold;
}

.questions-counter {
	font-size: 1.05rem;
	color: #8e8e8e;
	float: left;
}

ul {
	clear: both;
	list-style: none;
	margin: 0;
	padding: 0;
	padding-top: 2.2rem;
}
</style>
