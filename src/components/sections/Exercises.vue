<template functional>
	<section class="section">
		<div class="container grid-x2fr">
			<div class="col-l">
				<img src="@/assets/img/exercises_img.png" alt="Задания" />
			</div>
			<div class="col-r">
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
		</div>
	</section>
</template>

<style lang="postcss" scoped>
section {
	background: radial-gradient(
		24.03% 53.7% at 25.97% 50%,
		rgba(115, 59, 234, 0.5) 0%,
		rgba(115, 59, 234, 0) 100%
	);

	.col-r {
		justify-self: end;
	}
}
</style>
