<template>
	<li class="exercise">
		<span class="exercise__number">{{ exercise.number }}</span>
		<p class="exercise__title">{{ exercise.description }}</p>

		<div class="exercise__wrap">
			<ul v-for="material of exercise.media" :key="material.id">
				<li>
					<a
						:href="host_url + material.url"
						target="_blank"
						class="exercise__link"
						>{{ material.name }}</a
					>
				</li>
			</ul>
			<div class="exercise__toggle-wrap">
				<span class="exercise__label">Задание выполнено </span>
				<input
					type="checkbox"
					:id="exercise.id"
					:checked="completedExercises.includes(exercise.id)"
					@change="toggleCompletedExercise(exercise.id)"
				/>
				<label :for="exercise.id">
					toggle
				</label>
			</div>
		</div>
	</li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			host_url: process.env.VUE_APP_API_URL,
		}
	},
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
.exercise {
	padding: 1.5rem 1.5rem 3.5rem;
	background: #343434;
	border: 1px solid #434343;
	border-radius: 10px;
	margin-bottom: 2.5rem;
	position: relative;

	&__number {
		position: absolute;
		display: block;
		width: 40px;
		height: 40px;
		left: -20px;
		top: -20px;
		padding: 0.5rem;
		background-color: #733bea;
		border-radius: 50%;
		text-align: center;
	}

	&__title {
		font-weight: 500;
		font-size: 0.92rem;
		line-height: 140%;
		color: #d8d8d8;
		margin-bottom: 1rem;
	}

	&__wrap {
		width: 100%;
		/* clear: both; */
	}

	&__toggle-wrap {
		float: right;
	}

	&__label {
		vertical-align: middle;
		margin-right: 1.3rem;
		font-weight: 500;
		font-size: 0.87rem;
		color: #8b8b8b;
	}

	&__link {
		font-weight: 500;
		font-size: 0.8rem;
		display: block;
		line-height: 140%;
		color: #717171;
		transition: color 0.3s;
		position: relative;
		vertical-align: middle;
		margin-bottom: 0.5rem;
		margin-left: 0.5rem;
		&:hover {
			color: #ab96d6;
		}

		&::before {
			content: '';
			display: inline-block;
			width: 1.25rem;
			height: 1rem;
			background-image: url('../../../assets/img/img-icon.svg');
			background-size: cover;
			margin-right: 0.7rem;
		}
	}
}
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
	background-color: #414141;
	display: inline-block;
	border-radius: 100px;
	position: relative;
	transition: background-color 0.3s;
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