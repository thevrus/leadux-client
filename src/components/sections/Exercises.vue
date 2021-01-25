<template>
	<section class="section">
		<div class="container grid-x2fr">
			<div class="col-l">
				<img ref="img1" src="@/assets/img/exercises_img.png" alt="Задания" />
			</div>
			<div class="col-r">
				<span ref="answer1">Главное — практика</span>
				<h2 ref="title1">Выполняйте задания и развивайте навыки</h2>
				<p ref="desc1">
					Закрепляйте ваши знания практикой. Домашние задания еще никогда не
					были такими интересными и полезными
				</p>

				<a ref="link1" href="#price" rel="noopener" class="cta">Купить курс</a>
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
		const { answer1, title1, desc1, link1, img1 } = this.$refs

		gsap.from([title1, desc1, link1], {
			x: 200,
			opacity: 0,
			ease: 'easeOut',
			stagger: 0.1,
			duration: 1,
			scrollTrigger: {
				trigger: title1,
				start: 'top 95%',
				end: 'bottom 5%',
			},
		})

		gsap.from(answer1, {
			x: -50,
			opacity: 0,
			ease: 'easeOut',
			duration: 1,
			scrollTrigger: {
				trigger: answer1,
				start: 'top 95%',
				end: 'bottom 5%',
			},
		})

		gsap.from(img1, 1, {
			x: -200,
			opacity: 0,
			ease: 'easeOut',
			scrollTrigger: {
				trigger: img1,
				start: 'top 95%',
				end: 'bottom 5%',
			},
		})
	},
}
</script>

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
				45% 45% at 50% 50%,
				rgba(115, 59, 234, 0.8) 0%,
				rgba(115, 59, 234, 0) 100%
			);
			display: block;
			z-index: -1;

			@media (max-width: 768px) {
				width: 170%;
				height: 170%;
				background: radial-gradient(
					35% 35% at 50% 50%,
					rgba(115, 59, 234, 1) 0%,
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

		a {
			display: block;
			width: 60%;
			text-align: center;
			margin: 0 auto 3rem;
		}
	}
}
</style>
