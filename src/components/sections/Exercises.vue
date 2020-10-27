<template functional>
	<section id="exercises">
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

				<a href="#" class="buy-btn">Купить курс Figma</a>
			</div>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
#exercises {
	background: radial-gradient(
			24.03% 53.7% at 25.97% 50%,
			rgba(115, 59, 234, 0.5) 0%,
			rgba(115, 59, 234, 0) 100%
		),
		#000000;
	padding: 3.25rem 0;
	margin: 3.25rem 0;

	.col-r {
		justify-self: end;
	}

	span {
		padding: 0.4rem 1rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		margin-top: 2rem;
		margin-bottom: 2rem;
		color: #f5f5f5;
	}

	h3 {
		max-width: 454px;
		font-weight: bold;
		font-size: responsive 1.5rem 2.25rem;
		line-height: 130%;
		color: #f4f4f4;
		margin-bottom: 1.5rem;
	}

	p {
		font-style: normal;
		font-weight: 500;
		font-size: responsive 0.8rem 1rem;
		line-height: 150%;
		color: #f2f2f2;
		max-width: 448px;
		margin-bottom: 2.25rem;
	}

	img {
		width: 100%;
		max-width: 618px;
	}
}
</style>
