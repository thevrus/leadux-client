<template>
	<ul v-if="!loading && exercises.length > 0">
		<li v-for="exercise in exercises" :key="exercise.id">
			<Exercise
				v-if="currentLesson.id === exercise.lesson.id"
				:exercise="exercise"
			/>
		</li>
	</ul>
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
	methods: {
		...mapActions('exercises', ['loadExercises']),
	},
	mounted() {
		this.loadExercises().then(() => (this.loading = false))
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
