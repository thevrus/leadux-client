<template>
	<section>
		<h3>Попробуй первые 2 занятия бесплатно!</h3>
		<p id="price">Гарантия возврата денег</p>

		<div class="plans">
			<img src="@/assets/img/discount.svg" alt="" />

			<div class="plan">
				<div>
					<h4>{{ plans[0].name }}</h4>

					<p class="price">{{ plans[0].price }}<span>$</span></p>

					<ul>
						<li v-for="(pro, index) of plans[0].pros" :key="index">
							{{ pro }}
						</li>
					</ul>
				</div>

				<a :href="plans[0].link" class="cta">Купить</a>
			</div>

			<span class="divider"></span>

			<div class="plan">
				<div>
					<h4>{{ plans[1].name }}</h4>

					<p class="price">{{ plans[1].price }}<span>$</span></p>

					<ul>
						<li v-for="(pro, index) of plans[1].pros" :key="index">
							{{ pro }}
						</li>
					</ul>
				</div>

				<a :href="plans[1].link" class="cta cta-primary">Купить</a>
			</div>
		</div>

		<p class="disclaimer">
			<b>*</b> Видеокурс постоянно дополняется, после оплаты, все дополнения
			<span>абсолютно бесплатны</span>
		</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			plans: [
				{
					name: 'Студент',
					price: '49',
					link: '#!',
					pros: [
						'Доступ к видео материалам',
						'Доступ к заданиям',
						'Доступ к полезным материалам',
						'Комментирование',
						'Домашние задания',
						'Чат студентов',
					],
				},
				{
					name: 'Студент Плюс',
					price: '69',
					link: '#!',
					pros: [
						'Доступ к видео материалам',
						'Доступ к заданиям',
						'Доступ к полезным материалам',
						'Комментирование',
						'Домашние задания',
						'Чат студентов',
						'Дизайн ревью от преподавателя',
						'Консультации с преподавателем',
						'Менторство',
					],
				},
			],
		}
	},
}
</script>

<style lang="postcss" scoped>
section {
	margin-bottom: var(--section-margin);
	padding: 100px 0;
	background: radial-gradient(
		45% 40% at 50% 60%,
		rgba(127, 18, 165, 0.4) 0%,
		rgba(127, 18, 165, 0) 100%
	);

	h3 {
		font-style: normal;
		font-weight: 500;
		font-size: 44px;
		line-height: 180%;
		text-align: center;
		color: #ffffff;
		margin: 0;
	}

	p {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 180%;
		text-align: center;
		color: #ffffff;
		margin: 0;
	}

	.plans {
		padding: 2.2rem 3rem;
		background-color: #fff;
		max-width: 800px;
		border-radius: 20px;
		margin: 2rem auto;
		display: grid;
		grid-template-columns: 1fr 1px 1fr;
		grid-column-gap: 6%;
		position: relative;

		img {
			position: absolute;
			top: -60px;
			right: -50px;
		}
	}

	.plan {
		text-align: center;
		color: #000000;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h4 {
			color: #000000;

			font-style: normal;
			font-weight: 500;
			font-size: 26px;
			line-height: 120%;
			color: #000000;
		}

		.price {
			font-style: normal;
			font-weight: bold;
			font-size: 60px;
			line-height: 120%;
			color: #000000;
			padding: 0.6rem 0;

			border-top: 1px solid #e5e5e5;
			border-bottom: 1px solid #e5e5e5;

			span {
				font-style: normal;
				font-weight: bold;
				font-size: 24px;
				line-height: 120%;
			}
		}

		ul {
			list-style: none;
			margin: 1.8rem 0 4rem 0;
			padding: 0;
			text-align: left;

			li {
				margin-bottom: 1rem;

				font-style: normal;
				font-weight: 500;
				font-size: 1rem;
				line-height: 120%;

				&::before {
					content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjY2NzMgNWwtOS4xNjY2NSA5LjE2NjdMMy4zMzM5OCAxMCIgc3Ryb2tlPSIjMTFDQjVCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==');
					display: inline-block;
					vertical-align: text-top;
					margin-right: 4px;
				}
			}
		}

		.cta {
			background-color: #000;
			display: block;
			padding: 1.1rem 0;
			color: #fff;
			border-radius: 8px;

			font-style: normal;
			font-weight: 500;
			font-size: 18px;
			line-height: 120%;
			text-align: center;
			text-decoration: none;
			transition: opacity transform 0.3s;

			&:hover {
				opacity: 0.8;
			}

			&-primary {
				background-color: #8f52ff;
			}
		}
	}

	.divider {
		background-color: #e5e5e5;
		width: 0.5px;
		height: 100%;
	}

	.disclaimer {
		font-style: normal;
		font-weight: 100;
		font-size: 15px;
		text-align: center;

		span {
			font-weight: 500;
			color: #8f52ff;
		}
	}
}
</style>
