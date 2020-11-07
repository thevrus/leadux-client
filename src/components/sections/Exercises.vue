<template functional>
	<section class="section">
		<div class="container grid-x2fr">
			<div class="col-l">
				<img src="@/assets/img/exercises_img.png" alt="Задания" />
			</div>
			<div class="col-r">
				<span>Главное — практика</span>
				<h3>
					Выполняйте задания и развивайте навыки
				</h3>
				<p>
					Закрепляйте ваши знания практикой. Домашние задания еще никогда не
					были такими интересными и полезными
				</p>

				<a href="#price" class="cta">Купить курс</a>
			</div>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
section {
	overflow: hidden;
	.col-r {
		justify-self: end;
	}
	.col-l {
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
				rgba(115, 59, 234, 0.5) 0%,
				rgba(115, 59, 234, 0) 100%
			);

			display: block;
			z-index: -1;

			@media (max-width: 768px) {
				width: 170%;
				height: 170%;
				background: radial-gradient(
					54.04% 46.09% at 50.09% 50%,
					rgba(115, 59, 234, 0.5) 0%,
					rgba(115, 59, 234, 0) 100%
				);
			}
		}
	}

	@media (max-width: 768px) {
		.col-l {
			margin-bottom: 3rem;
		}
		.col-r {
			justify-self: initial;
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
