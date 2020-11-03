<template functional>
	<section class="section">
		<div class="container grid-x2fr">
			<div class="col-l">
				<span>Сотни полезных ссылок</span>
				<h3>
					Очень много полезных материалов
				</h3>
				<p>
					Все лучшее, что автор использует лично в ежедневной работе. Тысячи
					иконок, изображения в высоком разрешении и много-много всего
					совершенно бесплатно
				</p>

				<a href="#price" class="cta">Купить курс</a>
			</div>
			<div class="col-r">
				<img src="@/assets/img/materials_img.png" alt="Вопросы и ответы" />
			</div>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
section {
	overflow: hidden;
	.col-l {
		margin-left: 3rem;
	}

	.col-r {
		justify-self: end;
		display: block;
		position: relative;
		&::after {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			content: '';
			width: 140%;
			height: 140%;
			background: radial-gradient(
				50.04% 46.09% at 50.09% 50%,
				rgba(18, 165, 95, 0.5) 0%,
				rgba(18, 165, 95, 0) 100%
			);

			display: block;
			z-index: -1;
		}
	}

	@media (max-width: 768px) {
		.col-l {
			margin-left: 0;
		}
		.col-r {
			justify-self: center;
		}
		p {
			margin-left: auto;
			margin-right: auto;
		}

		h3 {
			margin-left: auto;
			margin-right: auto;
			text-align: center;
		}

		a {
			display: block;
			width: 60%;
			text-align: center;
			margin: 0 auto 3rem;
		}
	}
}
</style>
