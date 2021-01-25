<template>
	<div>
		<ul v-if="!loading && exercises.length > 0">
			<li v-for="exercise in exercises" :key="exercise.id">
				<Exercise
					v-if="
						exercise.lesson &&
							exercise.lesson.id &&
							currentLesson.id === exercise.lesson.id
					"
					:exercise="exercise"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
import Exercise from '@/components/panel/exercises/Exercise'
import { mapGetters, mapActions } from 'vuex'

export default {
	components: {
		Exercise,
	},
	data() {
		return {
			loading: true,
		}
	},
	computed: {
		...mapGetters('exercises', ['exercises']),
		...mapGetters('lessons', ['currentLesson']),
	},
	mounted() {
		this.loadExercises().then(() => (this.loading = false))
	},
	methods: {
		...mapActions('exercises', ['loadExercises']),
	},
}
</script>

<style lang="postcss" scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
