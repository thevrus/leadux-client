<template>
	<li>
		<span>{{ exercise.number }}</span>
		<p>{{ exercise.title }}</p>
		<br />

		<span>Задание выполнено </span>
		<input
			type="checkbox"
			id="switch"
			:checked="completedExercises.includes(exercise.id)"
			@change="toggleCompletedExercise(exercise.id)"
		/>
		<label for="switch">
			Toggle
		</label>
		<hr />
	</li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	props: {
		exercise: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapGetters('exercises', ['completedExercises']),
	},
	methods: {
		...mapActions('exercises', ['toggleCompletedExercise']),
	},
}
</script>

<style lang="postcss" scoped>
input[type='checkbox'] {
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 52px;
	height: 32px;
	background: grey;
	display: inline-block;
	border-radius: 100px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 4px;
	left: 5px;
	width: 24px;
	height: 24px;
	background: #fff;
	border-radius: 50%;
	transition: 0.3s;
}

input:checked + label {
	background: #60715d;
}

input:checked + label:after {
	background: #11e271;
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

label:active:after {
	width: 24px;
}
</style>
