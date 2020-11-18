<template>
	<section class="container">
		<h2 id="price">Попробуй первые 2 занятия бесплатно!</h2>
		<p>Гарантия возврата денег</p>

		<div class="plans-wrapp">
			<div class="plans" v-if="!loading">
				<img src="@/assets/img/discount.svg" alt="" />

				<div class="plan">
					<div>
						<h3>{{ student.name }}</h3>

						<div class="price-box">
							<p class="price" :class="{ oldPrice: isValidPromo }">
								{{ student.amount }}<span>$</span>
							</p>
							<p v-if="isValidPromo" class="price">
								{{ studentPromo }}<span>$</span>
							</p>
						</div>

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
						<p v-if="roleType !== 'authenticated'" class="student-plan">
							<span class="inner">Приобретен</span>
						</p>
						<button v-else class="cta">Купить</button>
					</form>

					<Promotion v-if="roleType === 'authenticated'" class="promo-phone" />
				</div>

				<span class="divider"></span>

				<div class="plan">
					<div>
						<h3>{{ studentPlus.name }}</h3>

						<div class="price-box">
							<p class="price" :class="{ oldPrice: isValidPromo }">
								{{ studentPlus.amount }}<span>$</span>
							</p>
							<p v-if="isValidPromo" class="price">
								{{ studentPlusPromo }}<span>$</span>
							</p>
						</div>

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
						<p v-if="roleType === 'advanced'" class="student-plan">
							<span class="inner">Приобретен</span>
						</p>
						<button v-else class="cta cta-primary">
							Купить
						</button>
					</form>
					<Promotion v-if="roleType !== 'advanced'" class="promo-phone" />
				</div>
			</div>

			<Promotion
				v-if="roleType !== 'advanced'"
				@data="showResult"
				class="promo-desktop"
			/>
		</div>

		<p class="disclaimer">
			<b>*</b> Видеокурс постоянно дополняется, после оплаты, все дополнения
			<span>абсолютно бесплатны</span>
		</p>
	</section>
</template>

<script>
import AuthService from '@/services/auth.service'
import Promotion from '@/components/Promotion'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			student: null,
			studentPlus: null,
			nextRoute: null,
			loading: true,
			isValidPromo: null,
			studentPromo: 48,
			studentPlusPromo: 58,
		}
	},
	components: {
		Promotion,
	},
	computed: {
		...mapGetters('auth', ['user', 'loggedIn', 'roleType']),
	},
	methods: {
		submitForm(e) {
			if (!this.loggedIn) {
				e.preventDefault()
				this.$router.push({ name: 'register', query: { nextRoute: 'pay' } })
			}
		},

		showResult(data) {
			console.log(data)
			this.isValidPromo = data
		},
	},
	created: function() {
		this.nextRoute = this.$route.query ? this.$route.query.nextRoute : null

		AuthService.invoice().then(({ data }) => {
			this.student = data[0]
			this.studentPlus = data[1]

			this.loading = false
			console.log(this.roleType)
			console.log(this.studentPlus)
		})
	},
}
</script>

<style lang="postcss" scoped>
section {
	margin-bottom: var(--section-margin);
	background: radial-gradient(
		45% 40% at 50% 60%,
		rgba(127, 18, 165, 0.5) 0%,
		rgba(127, 18, 165, 0) 100%
	);

	h2 {
		font-style: normal;
		font-weight: 500;
		font-size: responsive 1.7rem 2.75rem;
		line-height: 180%;
		text-align: center;
		color: #fff;
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
		color: #fff;
		margin: 0;
	}

	.promo-phone {
		display: none;
		@media (max-width: 690px) {
			display: block;
		}
	}
	.promo-desktop {
		@media (max-width: 690px) {
			display: none;
		}
	}

	.plans-wrapp {
		padding: 2.2rem 3rem;
		background-color: #fff;
		max-width: 800px;
		border-radius: 20px;
		margin: 2rem auto 1rem;

		@media (max-width: 690px) {
			margin: 0.5rem auto 1rem;
			background-color: transparent;
			padding: 0.5rem 0;
		}
	}

	.plans {
		display: grid;
		grid-template-columns: 1fr 1px 1fr;
		grid-column-gap: 6%;
		position: relative;

		@media (max-width: 690px) {
			margin: 0.5rem auto 1rem;
			background-color: transparent;
			grid-template-columns: 1fr;
			grid-column-gap: 0;
			grid-row-gap: 0.8rem;
			padding: 0.5rem 0;
		}

		img {
			position: absolute;
			top: -60px;
			right: -90px;

			@media (max-width: 940px) {
				display: none;
			}
		}
	}

	.plan {
		text-align: center;
		color: #000;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		@media (max-width: 690px) {
			width: 100%;
			padding: 2rem 1.5rem;
			background-color: #fff;
			max-width: 800px;
			border-radius: 20px;
			margin-bottom: 1rem;
		}

		h3 {
			color: #000;
			font-style: normal;
			font-weight: 500;
			font-size: 26px;
			line-height: 120%;

			@media (max-width: 690px) {
				margin: 0 1rem 1rem;
			}
		}

		.price {
			font-style: normal;
			font-weight: bold;
			font-size: 60px;
			line-height: 100%;
			color: #000;
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
		.price-box {
			position: relative;
		}
		.oldPrice {
			font-size: 32px;
			line-height: 120%;
			color: rgba(0, 0, 0, 0.4);
			border: none;
			position: absolute;
			bottom: 0;
			left: 4rem;
		}

		.student-plan {
			color: #007a22;
			background-color: #e5ffed;
			width: 100%;
			border: 0;
			outline: 0;
			display: block;

			text-align: center;
			border-radius: 8px;
			padding: 0.8rem 0;
			.inner {
				position: relative;
				font-size: 1.1rem;
				&::after {
					content: '';
					background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjI4NzkgNUw4LjEyMTI2IDE0LjE2NjdMMy45NTQ1OSAxMCIgc3Ryb2tlPSIjMDA3QTIyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K');
					width: 20px;
					height: 20px;
					position: absolute;
					top: 50%;
					right: -1.5rem;
					transform: translateY(-50%);
				}
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

			:hover {
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
