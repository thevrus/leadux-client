<template>
	<section class="container" id="faq">
		<div class="grid">
			<span class="left">
				<h2>Часто задаваемые вопросы:</h2>

				<button @click="toggleChat">Задать вопрос</button>
			</span>

			<span>
				<details v-for="(faq, index) in faqs" :key="'FAQ' + index">
					<summary>{{ faq.summary }}</summary>
					<p>{{ faq.content }}</p>
				</details>
			</span>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			faqs: [
				{
					summary:
						'Я полный новичок в дизайне, ничего не умею. У меня получится?',
					content:
						'Конечно! При грамотном подходе к обучению, самостоятельном расширении кругозора и своевременном выполнении домашних заданий вы сможете достигнуть результата даже без специальных базовых знаний. Во всём помогут опытные наставники, которые будут курировать вас на протяжении всего курса.',
				},
				{
					summary: 'Почему именно Figma?',
					content:
						'Figma – это самая перспективная программа для веб дизайна в наше время. Она объединила в себе самые передовые инструменты разработки дизайна сайтов и уже на голову опережает конкурентов.',
				},
				{
					summary:
						'Сколько времени надо приделить учёбе, что-бы начать зарабатывать?',
					content:
						'Ну это зависит только от Вас, если заниматься по 2-6 часов в день, то через пару месяцев можно идти на фриланс или рассматривать вакансии дизайнера.',
				},
				{
					summary: 'Будет ли обновляться курс?',
					content: 'Да, мы будем добавлять новые уроки 1-2 раза в месяц.',
				},
			],
		}
	},
	methods: {
		toggleChat() {
			window.$crisp && window.$crisp.push(['do', 'chat:open'])
		},
	},
}
</script>

<style lang="postcss" scoped>
.container {
	margin-bottom: var(--section-margin);

	@media (max-width: 720px) {
		margin-bottom: calc(var(--section-margin) + 80px);
	}
}

.grid {
	display: grid;
	grid-template-columns: 3fr 5fr;
	grid-column-gap: 6%;

	@media (max-width: 720px) {
		display: block;
		position: relative;
		margin-bottom: 10rem;
	}

	.left {
		position: relative;
		@media (max-width: 720px) {
			position: static;
		}
	}
}

h2 {
	max-width: 400px;
	font-weight: 500;
	font-size: responsive 1.8rem 2.5rem;
	color: #fff;
	line-height: 120%;
	margin: 0;
	padding: 0;

	@media (max-width: 720px) {
		margin-bottom: 2rem;
	}
}

button {
	font-weight: 100;
	font-size: 1rem;
	background: none;
	padding: 1.2rem 25%;
	outline: none;
	color: #fff;
	border: 1px solid #666;
	border-radius: 8px;
	margin-top: auto;
	position: absolute;
	cursor: pointer;
	bottom: 0;
	left: 0;
	transition: border-color 0.3s;

	@media (max-width: 720px) {
		position: absolute;
		bottom: -6rem;
		left: 0;
	}

	@media (max-width: 450px) {
		padding: 1.2rem 0;
		display: block;
		width: 100%;
	}

	&:hover {
		border: 1px solid #fff;
	}
}

details {
	color: #fff;
	cursor: pointer;
	padding-bottom: 1.2rem;
	border-bottom: 1px solid #343434;
	font-weight: 100;

	&:not(:last-child) {
		margin-bottom: 2.6rem;
	}

	summary {
		position: relative;
		outline: none;
		font-weight: 500;
		font-size: 1.1rem;
		padding-top: 4px;
		padding-right: 2rem;
		transition: transform 0.3s;

		::-webkit-details-marker {
			display: none;
		}

		::-moz-details-marker {
			display: none;
		}

		&:hover {
			opacity: 0.8;
		}

		&::after {
			position: absolute;
			right: 0;
			top: 0;
			content: '';
			width: 32px;
			cursor: pointer;
			height: 32px;
			display: block;
			background-size: cover;
			background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMTYuNSIgc3Ryb2tlPSIjMzUzNTM1Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy4wMDAxIDEyYy0uMzk0NSAwLS43MTQzLjMxOTgtLjcxNDMuNzE0M3YzLjU3MmgtMy41NzE1Yy0uMzk0NSAwLS43MTQzLjMxOTgtLjcxNDMuNzE0MyAwIC4zOTQ0LjMxOTguNzE0Mi43MTQzLjcxNDJoMy41NzE1djMuNTcwOWMwIC4zOTQ1LjMxOTguNzE0My43MTQzLjcxNDMuMzk0NCAwIC43MTQyLS4zMTk4LjcxNDItLjcxNDN2LTMuNTcwOWgzLjU3MTRjLjM5NDUgMCAuNzE0My0uMzE5OC43MTQzLS43MTQyIDAtLjM5NDUtLjMxOTgtLjcxNDMtLjcxNDMtLjcxNDNoLTMuNTcxNHYtMy41NzJjMC0uMzk0NS0uMzE5OC0uNzE0My0uNzE0Mi0uNzE0M3oiIGZpbGw9IiNDQ0MiLz48L3N2Zz4=');
			transition: transform 0.3s;
		}
	}
}

details[open] summary::after {
	transform: rotate(45deg);
}

details[open] summary ~ * {
	animation: fadeIn 0.3s ease-in-out;
}
</style>
