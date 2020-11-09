<template functional>
	<section class="section">
		<div class="container grid-x2fr">
			<div class="col-l">
				<span>Ответы получат все</span>

				<h2>
					Задвайте вопросы — получайте ответы
				</h2>

				<p>
					Смотрите урок и у вас возникли вопросы? Задайте их не отрываясь от
					просмотра и получите быстрый ответ от автора курса
				</p>

				<a href="#price" rel="noopener" class="cta">Купить курс</a>
			</div>

			<div class="col-r">
				<img src="@/assets/img/questions_img.png" alt="Вопросы и ответы" />
			</div>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
.section {
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
				rgba(40, 152, 255, 0.65) 0%,
				rgba(40, 152, 255, 0) 100%
			);
			display: block;
			z-index: -1;

			@media (max-width: 768px) {
				width: 170%;
				height: 170%;
				background: radial-gradient(
					54.04% 40.09% at 50.09% 50%,
					rgba(40, 152, 255, 0.5) 0%,
					rgba(40, 152, 255, 0) 100%
				);
			}
		}
	}

	@media (max-width: 768px) {
		.col-l {
			margin-left: 0;
			order: 2;
		}

		.col-r {
			justify-self: center;
			order: 1;
			margin-bottom: 3rem;
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
