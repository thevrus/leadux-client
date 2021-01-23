<template>
	<section class="section">
		<div class="container grid-x2fr">
			<div class="col-l">
				<span ref="answer2">Сотни полезных ссылок</span>
				<h2 ref="title2">Очень много полезных материалов</h2>
				<p ref="desc2">
					Все лучшее, что автор использует лично в ежедневной работе. Тысячи
					иконок, изображения в высоком разрешении и много-много всего
					совершенно бесплатно
				</p>

				<a ref="link2" href="#price" rel="noopener" class="cta">Купить курс</a>
			</div>
			<div class="col-r">
				<img
					ref="img2"
					src="@/assets/img/materials_img.png"
					alt="Вопросы и ответы"
				/>
			</div>
		</div>
	</section>
</template>
<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
	mounted() {
		const { answer2, title2, desc2, link2, img2 } = this.$refs

		gsap.from([title2, desc2, link2], {
			x: -200,
			opacity: 0,
			ease: 'easeOut',
			stagger: 0.1,
			duration: 1,
			scrollTrigger: {
				trigger: title2,
				start: 'top 95%',
				end: 'bottom 5%',
			},
		})

		gsap.from(answer2, {
			x: 50,
			opacity: 0,
			ease: 'easeOut',
			duration: 1,
			scrollTrigger: {
				trigger: answer2,
				start: 'top 95%',
				end: 'bottom 5%',
			},
		})

		gsap.from(img2, 1, {
			x: 200,
			opacity: 0,
			ease: 'easeOut',
			scrollTrigger: {
				trigger: img2,
				start: 'top 95%',
				end: 'bottom 5%',
			},
		})
	},
}
</script>

<style lang="postcss" scoped>
.section {
	overflow: hidden;

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
				45% 45% at 50% 50%,
				rgba(18, 165, 95, 0.8) 0%,
				rgba(18, 165, 95, 0) 100%
			);
			display: block;
			z-index: -1;

			@media (max-width: 768px) {
				width: 170%;
				height: 170%;
				background: radial-gradient(
					35% 35% at 50% 50%,
					rgba(18, 165, 95, 1) 0%,
					rgba(18, 165, 95, 0) 100%
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
