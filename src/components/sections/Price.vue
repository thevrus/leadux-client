<template>
	<section class="container">
		<h2 id="price">Попробуй первые 2 занятия бесплатно!</h2>
		<p>Гарантия возврата денег</p>

		<div v-if="!loading" class="plans-wrapp">
			<div class="plans">
				<img src="@/assets/img/discount.svg" alt="Бестселлер" />

				<Plan :plan="plans[0]" on-apply="applyPromocode" />
				<span class="divider"></span>
				<Plan :plan="plans[1]" on-apply="applyPromocode" />
			</div>

			<Promotion
				class="promo-desktop"
				:is-valid="validPromo"
				@apply-promo="applyPromocode"
				@discard-promo="discardPromocode"
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
import Plan from '@/components/Plan'
import Promotion from '@/components/Promotion'
import { mapGetters } from 'vuex'

export default {
	components: {
		Plan,
		Promotion,
	},
	data() {
		return {
			plans: [],
			nextRoute: null,
			loading: true,
			validPromo: null,
		}
	},
	computed: {
		...mapGetters('auth', ['user', 'loggedIn', 'roleType']),
	},
	created: function() {
		this.nextRoute = this.$route.query ? this.$route.query.nextRoute : null

		AuthService.invoice().then(({ data }) => {
			this.plans = data
			this.loading = false
		})
	},
	methods: {
		applyPromocode(promocode) {
			console.log('applyPromocode fired')

			AuthService.invoicePromo(promocode).then(({ data }) => {
				this.plans = data

				for (let i = 0; i < this.plans.length; i++) {
					if (this.plans[i].promo_applied) {
						this.validPromo = true
					} else {
						this.validPromo = false
						break
					}
				}
			})
		},

		discardPromocode() {
			AuthService.invoice().then(({ data }) => {
				this.plans = data
				this.validPromo = null
			})
		},
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
		font-family: 'Freigeist-XWideBold', system-ui;
		font-size: responsive 1.5rem 2rem;
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
		font-size: responsive 1rem 1.5rem;
		line-height: 180%;
		text-align: center;
		color: #fff;
		margin: 0;
	}

	/* .promo-mobile {
		display: none;

		@media (max-width: 690px) {
			display: block;
		}
	} */

	.promo-desktop {
		@media (max-width: 690px) {
			display: none;
		}
	}

	.plans-wrapp {
		padding: 1.8rem 2.2rem;
		background-color: #fff;
		max-width: 860px;
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
		grid-column-gap: 4%;
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
			top: -80px;
			right: -112px;

			@media (max-width: 940px) {
				display: none;
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
