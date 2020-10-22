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
					<div v-for="question in questions" :key="question.id">
						<Question
							v-if="currentLesson.id === question.lesson.id"
							:question="question"
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
			addQuestion: false,
			loading: true,
		}
	},
	computed: {
		...mapGetters('auth', ['loggedIn', 'user']),
		...mapGetters('questions', ['questions']),
		...mapGetters('lessons', ['currentLesson']),

		questionsLength() {
			let counter = 0

			this.questions.forEach(question => {
				if (this.currentLesson.id === question.lesson.id) counter++
			})

			return counter
		},
	},
	methods: {
		...mapActions('questions', ['getQuestions']),
	},
	mounted() {
		this.getQuestions().then(() => {
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
