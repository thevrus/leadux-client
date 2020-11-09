<template>
	<section id="learn" class="container">
		<h2>В этом курсе вы научитесь:</h2>
		<ul>
			<li v-for="(item, index) in array" :key="'Learn' + index">
				<img :src="item.img" :alt="item.title" />
				<h3>{{ item.title }}</h3>
				<p>{{ item.description }}</p>
			</li>
		</ul>
	</section>
</template>

<script>
import img1 from '@/assets/img/learn_img-1.jpg'
import img2 from '@/assets/img/learn_img-2.jpg'
import img3 from '@/assets/img/learn_img-3.jpg'
import img4 from '@/assets/img/learn_img-4.jpg'
import img5 from '@/assets/img/learn_img-5.jpg'
import img6 from '@/assets/img/learn_img-6.jpg'

export default {
	data() {
		return {
			array: [
				{
					img: img1,
					title: 'Полностью изучите инструмент Figma',
					description:
						'Вы будете знать где находятся функции, панели и команды. Сможете легко ориентироваться внутри программы',
				},
				{
					img: img2,
					title: 'Освоите все гарячие клавишы и фишки Figma',
					description:
						'В каждом урок автор будет показывать какие клавиши он нажимает и за то отвечает то или иное сокращение',
				},
				{
					img: img3,
					title: 'Работать со стилями и компонентами',
					description:
						'Вы обучитесь компонентному подходу в разработке интерфейсов который упростит вашу жизнь и жизнь разработчиков',
				},
				{
					img: img4,
					title: 'Работать со шрифтами',
					description:
						'Вы освоите инстумент типографики и узнаете о разновидности гарнитур используемых в разработке интерфейсов',
				},
				{
					img: img5,
					title: 'Создавать мобильные приложения',
					description:
						'Разбересь с профессиональными функциями, которые позволят упростить и ускорить разработку интерфейсов для смартфонов',
				},
				{
					img: img6,
					title: 'Создавать веб сайты',
					description:
						'В заключительной части курса вы увидите подробный процесс создания главной страницы сайта с нуля. Шаг за шагом...',
				},
			],
		}
	},
}
</script>

<style lang="postcss" scoped>
section {
	margin-bottom: var(--section-margin);
	padding-bottom: 3.25rem;
}

h2 {
	font-style: normal;
	font-size: responsive 1.5rem 2.75rem;
	line-height: 120%;
	color: #fff;
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
	}

	li {
		@media (max-width: 768px) {
			margin-bottom: 5rem;
		}

		img {
			width: 100%;
			max-width: auto;
			border-radius: 4px;

			@media (min-width: 960px) {
				max-width: 382px;
			}
		}

		h3 {
			font-weight: bold;
			font-size: 1.1rem;
			line-height: 120%;
			margin: 0.9rem 0 0.8rem 0;
		}

		p {
			font-weight: 100;
			line-height: 145%;
			@media (max-width: 768px) {
				max-width: 382px;
				margin: 0 auto;
			}
		}
	}
}
</style>
