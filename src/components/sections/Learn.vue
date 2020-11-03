<template>
	<section class="container" id="learn">
		<h3>В этом курсе вы научитесь:</h3>
		<ul>
			<li v-for="(item, index) in array" :key="index">
				<h4>{{ item.title }}</h4>
				<p>{{ item.description }}</p>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
			array: [
				{
					title: 'Создавать веб-сайты с нуля',
					description:
						'В заключительной части курса вы увидите подробный процесс создания главной страницы сайта с нуля. Шаг за шагом...',
				},
				{
					title: 'Дизайнить для iOS и Android',
					description:
						'Разбересь с профессиональными функциями, которые позволят упростить и ускорить разработку интерфейсов для смартфонов',
				},
				{
					title: 'Рисовать современный дизайн',
					description:
						'Освоите множество полезных инструментов и приемов для создания дорогого, современного дизайна и сможете начать зарабатывать',
				},
				{
					title: 'Работать с интерфейсом Figma',
					description:
						'Вы будете знать где находятся функции, панели и команды. Сможете легко ориентироваться внутри программы',
				},
				{
					title: 'Грамотно управлять инструментами',
					description:
						'Сможете пользоваться всеми инструментами Figma на профессиональном уровне и использовать все их фишки и секреты',
				},
				{
					title: 'Пользоваться горячими клавишами',
					description:
						'В каждом урок автор будет показывать какие клавиши он нажимает и за то отвечает то или иное сокращение',
				},
			],
		}
	},
}
</script>

<style lang="postcss" scoped>
section {
	margin-bottom: var(--section-margin);
}

h3 {
	font-style: normal;
	font-weight: 500;
	font-size: 44px;
	line-height: 120%;
	color: #ffffff;
	max-width: 400px;
}

ul {
	list-style: none;
	color: #fff;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;

	@media (max-width: 920px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 768px) {
		display: block;
		max-width: 400px;
		margin: 0px auto;
	}

	li {
		@media (max-width: 768px) {
			margin-bottom: 3rem;
		}
		h4 {
			font-style: normal;
			font-weight: bold;
			font-size: 18px;
			line-height: 120%;

			&::before {
				display: block;
				margin-bottom: 1rem;
				content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiMzNEJGNkMiLz48cGF0aCBkPSJNNy43MTM4NyAxMi4zNDI5bDMuNDI4NTMgMy40Mjg1IDUuMTQyOS01LjQ4NTciIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==');
			}
		}

		p {
			font-style: normal;
			font-weight: 100;
			font-size: 15px;
			line-height: 145%;
			letter-spacing: 0.01em;
		}
	}
}
</style>
