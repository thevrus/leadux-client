<template>
	<section>
		<h3 id="price">Попробуй первые 2 занятия бесплатно!</h3>
		<p>Гарантия возврата денег</p>

		<div class="plans" v-if="!loading">
			<img src="@/assets/img/discount.svg" alt="" />

			<div class="plan">
				<div>
					<h4>{{ student.name }}</h4>

					<p class="price">{{ student.amount }}<span>$</span></p>

					<VueShowdown class="content" :markdown="student.pros" />
				</div>

				<form
					@submit="submitForm($event)"
					method="POST"
					accept-charset="utf-8"
					action="https://www.liqpay.ua/api/3/checkout"
				>
					<input type="hidden" name="data" :value="student.data" />
					<input type="hidden" name="signature" :value="student.signature" />
					<button class="cta">
						Купить
					</button>
				</form>
			</div>

			<span class="divider"></span>

			<div class="plan">
				<div>
					<h4>{{ studentPlus.name }}</h4>

					<p class="price">{{ studentPlus.amount }}<span>$</span></p>

					<VueShowdown class="content" :markdown="studentPlus.pros" />
				</div>

				<form
					method="POST"
					@submit="submitForm($event)"
					accept-charset="utf-8"
					action="https://www.liqpay.ua/api/3/checkout"
				>
					<input type="hidden" name="data" :value="studentPlus.data" />
					<input
						type="hidden"
						name="signature"
						:value="studentPlus.signature"
					/>
					<button class="cta cta-primary">
						Купить
					</button>
				</form>
			</div>
		</div>

		<p class="disclaimer">
			<b>*</b> Видеокурс постоянно дополняется, после оплаты, все дополнения
			<span>абсолютно бесплатны</span>
		</p>
	</section>
</template>

<script>
import AuthService from '@/services/auth.service'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			student: null,
			studentPlus: null,
			nextRoute: null,
			loading: true,
		}
	},
	computed: {
		...mapGetters('auth', ['user', 'loggedIn']),
	},
	methods: {
		submitForm(e) {
			if (!this.loggedIn) {
				e.preventDefault()
				this.$router.push({ name: 'Register', query: { nextRoute: 'Pay' } })
			}
		},
	},
	created: function() {
		this.nextRoute = this.$route.query ? this.$route.query.nextRoute : null

		AuthService.invoice().then(({ data }) => {
			this.student = data[0]
			this.studentPlus = data[1]

			this.loading = false
		})
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
		font-size: responsive 1.7rem 2.75rem;
		line-height: 180%;
		text-align: center;
		color: #ffffff;
		margin: 0;

		@media (max-width: 690px) {
			line-height: 120%;
			margin-bottom: 1.5rem;
		}
	}

	p {
		font-style: normal;
		font-weight: 500;
		font-size: responsive 1rem 1.5rem;
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
		margin: 2rem auto 1rem;
		display: grid;
		grid-template-columns: 1fr 1px 1fr;
		grid-column-gap: 6%;
		position: relative;

		@media (max-width: 690px) {
			background-color: transparent;
			grid-template-columns: 1fr;
			grid-column-gap: 0;
			grid-row-gap: 2rem;
			padding: 0.5rem 2rem;
		}

		img {
			position: absolute;
			top: -60px;
			right: -50px;

			@media (max-width: 940px) {
				display: none;
			}
		}
	}

	.plan {
		text-align: center;
		color: #000000;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		@media (max-width: 690px) {
			width: 100%;
			padding: 1rem;
			background-color: #fff;
			max-width: 800px;
			border-radius: 20px;
		}

		h4 {
			color: #000000;
			font-style: normal;
			font-weight: 500;
			font-size: 26px;
			line-height: 120%;
			color: #000000;

			@media (max-width: 690px) {
				margin: 0 1rem 1rem;
			}
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

		.content {
			>>> ul {
				list-style: none;
				margin: 1.8rem 0 4rem 0;
				padding: 0;
				text-align: left;

				li {
					margin-bottom: 1rem;
					font-weight: 500;
					font-size: 1rem;
					line-height: 120%;
					@media (max-width: 690px) {
						font-size: 0.93rem;
					}
					&::before {
						content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjY2NzMgNWwtOS4xNjY2NSA5LjE2NjdMMy4zMzM5OCAxMCIgc3Ryb2tlPSIjMTFDQjVCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==');
						display: inline-block;
						vertical-align: text-top;
						margin-right: 4px;
					}
				}
			}
		}

		.cta {
			background-color: #000;
			width: 100%;
			border: 0;
			outline: 0;
			display: block;
			padding: 1.1rem 0;
			cursor: pointer;
			text-align: center;
			color: #fff;
			border-radius: 8px;
			font-size: 1.1rem;
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
