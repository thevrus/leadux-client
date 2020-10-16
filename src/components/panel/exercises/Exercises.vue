<template>
	<ul v-if="!loading">
		<div v-for="exercise in exercises" :key="exercise.id">
			<Exercise :exercise="exercise" />
		</div>
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
		...mapGetters('exercises', { exercises: 'getExercises' }),
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
div {
	color: #fff;
}
</style>
