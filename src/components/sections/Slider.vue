<template>
	<section class="container">
		<div class="row">
			<span>
				<h2>Зарплата UI дизайнера</h2>
				<label for="slider">
					Источник данных:
					<a
						href="https://career.habr.com/salaries"
						rel="noopener noreferrer"
						target="_blank"
					>
						Хабр Карьера
					</a>
				</label>
			</span>

			<output :class="{ small: value == max }">
				{{ val }}<span v-show="value != max"> $</span>
			</output>
		</div>

		<div>
			<span class="position">Junior</span>
			<span class="position">Middle</span>
			<span class="position">Senior</span>
		</div>

		<input
			type="range"
			:min="min"
			:max="max"
			:step="step"
			v-model="value"
			@change="slide"
			id="slider"
			class="range pink"
		/>
	</section>
</template>

<script>
export default {
	data() {
		return {
			min: 500,
			max: 4000,
			step: 1,
			value: 2300,
		}
	},
	computed: {
		val() {
			return this.value == this.max ? 'Быть дизайнером – бесценно' : this.value
		},
	},
	methods: {
		slide(event) {
			this.value = event.target.value
		},
	},
}
</script>

<style lang="postcss" scoped>
.container {
	margin-bottom: var(--section-margin);
}

.row {
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	@media (max-width: 750px) {
		display: block;
	}
}

output {
	font-family: 'Freigeist-XWideBold', system-ui;
	font-size: 44px;
	min-width: 160px;

	@media (max-width: 750px) {
		display: block;
		text-align: center;
		margin: 3rem 0 1.5rem;
	}

	span {
		line-height: 120%;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
	}
}

.small {
	font-size: 28px;
	padding: 1.45rem 0;
}

h2 {
	font-family: 'Freigeist-XWideBold', system-ui;
	font-size: responsive 1.5rem 2rem;
	color: #fff;
	margin: 0 0 1rem 0;
}

label {
	font-style: normal;
	font-weight: 500;
	font-size: 1.1rem;
	line-height: 120%;
	color: #ccc;

	a {
		font-style: normal;
		font-weight: 500;
		font-size: 1.1rem;
		color: #fff;
		text-decoration: underline;
	}
}

div {
	margin-top: 5rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	color: #fff;

	@media (max-width: 750px) {
		margin-top: 0;
	}

	.position {
		position: relative;
		font-family: 'Freigeist-XWideBold', system-ui;

		&:not(:first-child)::after {
			content: '';
			z-index: 0;
			display: inline-block;
			position: absolute;
			bottom: -44px;
			left: 0;
			width: 14px;
			height: 6px;
			background-color: #000;

			@media (max-width: 750px) {
				width: 8px;
			}
		}
	}
}

.range {
	margin: 2.5rem 0;
	appearance: none;
	width: 100%;
}

/* Slider */
input[type='range'] {
	appearance: none;
	background-color: #343434;
	background-color: var(--cta);
	height: 2px;
	cursor: pointer;

	&:focus {
		outline: none;
	}
}

input[type='range']::slider-runnable-track {
	appearance: none;
	background-color: #343434;
	background-color: var(--cta);
	height: 2px;
	cursor: pointer;

	&:focus {
		outline: none;
	}
}

input[type='range']::range-track {
	appearance: none;
	background-color: #343434;
	background-color: var(--cta);
	height: 2px;
	cursor: pointer;

	&:focus {
		outline: none;
	}
}

input[type='range']::range-thumb {
	appearance: none;
	border-radius: 50%;
	height: 64px;
	width: 64px;
	bottom: 32px;
	background-color: var(--cta);
	position: relative;
	cursor: pointer;
	z-index: 2;
	transition: transform 0.3s ease;
	background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTI4LjUgNC45MTY5M2w1LjQ5OTkgNS40OTk5N0wyOC41IDE1LjkxNjhNNi41IDE1LjkxNjhsLTUuNDk5OTQtNS40OTk5TDYuNSA0LjkxNjkzTTM0LjAwMDEgMTAuNDE2NUgyMS4xNjY5TS45OTk5MSAxMC40MTY1SDEzLjgzMzEiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgzNnYyMEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==');
	background-repeat: no-repeat;
	background-position: center center;
	border: none;

	@media (max-width: 750px) {
		height: 58px;
		width: 58px;
		bottom: 30px;
		background-size: 65%;
	}
}
</style>
