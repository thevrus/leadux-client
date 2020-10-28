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
	background: radial-gradient(
		22.64% 50.59% at 75.59% 50%,
		rgba(18, 165, 95, 0.5) 0%,
		rgba(18, 165, 95, 0) 100%
	);

	.col-l {
		margin-left: 3rem;
	}

	.col-r {
		justify-self: end;
	}
}
</style>
