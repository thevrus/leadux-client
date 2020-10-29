<template functional>
	<section class="section">
		<div class="container grid-x2fr">
			<div class="col-l">
				<span>Ответы получат все</span>
				<h3>
					Задвайте вопросы — получайте ответы
				</h3>
				<p>
					Смотрите урок и у вас возникли вопросы? Задайте их не отрываясь от
					просмотра и получите быстрый ответ от автора курса
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
				rgba(40, 152, 255, 0.5) 0%,
				rgba(40, 152, 255, 0) 100%
			);

			display: block;
			z-index: -1;
		}
	}
}
</style>
