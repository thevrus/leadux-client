<template>
	<div class="exercise">
		<span class="exercise__number">{{ exercise.number }}</span>

		<VueShowdown
			class="exercise__description"
			:markdown="exercise.description"
		/>

		<div class="exercise__wrap">
			<ul>
				<li v-for="material of exercise.media" :key="material.id">
					<a :href="material.url" target="_blank" class="exercise__link">
						{{ material.name }}
					</a>
				</li>
			</ul>

			<div class="exercise__toggle-wrap">
				<span class="exercise__label">Задание выполнено</span>
				<input
					:id="exercise.id"
					type="checkbox"
					:checked="completedExercises.includes(exercise.id)"
					@change="toggleCompletedExercise(exercise.id)"
				/>
				<label :for="exercise.id">toggle</label>
			</div>
		</div>
	</div>
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
a {
	color: #0000;
}

.exercise {
	padding: 1.5rem 1.5rem 3.5rem;
	color: #fff;
	background-color: #17181c;
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
		background-color: var(--secondary);
		border-radius: 50%;
		text-align: center;
	}

	&__description {
		font-weight: 500;
		font-size: 0.92rem;
		line-height: 140%;
		margin-bottom: 1rem;
	}

	&__wrap {
		width: 100%;

		ul {
			list-style: none;
			margin: 0;
			padding: 0;

			li {
				display: inline-block;
			}
		}
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
		display: inline-block;
		letter-spacing: 0.4px;
		color: #717171;
		position: relative;
		margin-right: 1rem;
		margin-top: 0.1rem;
		text-decoration: none;

		&::before {
			content: '';
			display: inline-block;
			vertical-align: text-top;
			width: 1.25rem;
			height: 1rem;
			background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3IDBIM2EzIDMgMCAwMC0zIDN2MTBhMyAzIDAgMDAzIDNoMTRhMyAzIDAgMDAzLTNWM2EzIDMgMCAwMC0zLTN6TTMgMTRhMSAxIDAgMDEtMS0xdi0yLjQybDMuMy0zLjI5YTEgMSAwIDAxMS40IDBMMTMuNDEgMTRIM3ptMTUtMWExIDEgMCAwMS0xIDFoLS43N2wtMy44MS0zLjgzLjg4LS44OGExIDEgMCAwMTEuNCAwbDMuMyAzLjI5VjEzem0wLTMuMjRsLTEuODgtMS44N2EzLjA2IDMuMDYgMCAwMC00LjI0IDBsLS44OC44OC0yLjg4LTIuODhhMy4wNiAzLjA2IDAgMDAtNC4yNCAwTDIgNy43NlYzYTEgMSAwIDAxMS0xaDE0YTEgMSAwIDAxMSAxdjYuNzZ6IiBmaWxsPSIjNUM1QzVDIi8+PC9zdmc+');
			background-size: cover;
			margin: 0 0.4rem;
		}

		&:hover {
			color: #ab96d6;

			&::before {
				background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3IDBIM2EzIDMgMCAwMC0zIDN2MTBhMyAzIDAgMDAzIDNoMTRhMyAzIDAgMDAzLTNWM2EzIDMgMCAwMC0zLTN6TTMgMTRhMSAxIDAgMDEtMS0xdi0yLjQybDMuMy0zLjI5YTEgMSAwIDAxMS40IDBMMTMuNDEgMTRIM3ptMTUtMWExIDEgMCAwMS0xIDFoLS43N2wtMy44MS0zLjgzLjg4LS44OGExIDEgMCAwMTEuNCAwbDMuMyAzLjI5VjEzem0wLTMuMjRsLTEuODgtMS44N2EzLjA2IDMuMDYgMCAwMC00LjI0IDBsLS44OC44OC0yLjg4LTIuODhhMy4wNiAzLjA2IDAgMDAtNC4yNCAwTDIgNy43NlYzYTEgMSAwIDAxMS0xaDE0YTEgMSAwIDAxMSAxdjYuNzZ6IiBmaWxsPSIjQUI5NkQ2Ii8+PC9zdmc+');
			}
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

label:active::after {
	width: 24px;
}

input:checked + label::after {
	background: #11e271;
	left: calc(100% - 5px);
	transform: translateX(-100%);
}
</style>
