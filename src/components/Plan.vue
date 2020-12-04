<template>
	<div class="plan">
		<div>
			<h3 class="plan-name">{{ plan.name }}</h3>

			<div class="price-box">
				<div class="price">{{ plan.amount }}<span>$</span></div>

				<div v-if="plan.amount_before" class="price old-price">
					{{ plan.amount_before }}<span>$</span>
				</div>
			</div>

			<VueShowdown class="content" :markdown="plan.pros" />
		</div>

		<form
			method="POST"
			accept-charset="utf-8"
			action="https://www.liqpay.ua/api/3/checkout"
			@submit="submitForm($event)"
		>
			<input type="hidden" name="data" :value="plan.data" />
			<input type="hidden" name="signature" :value="plan.signature" />

			<button
				v-if="plan.user_plan && plan.role == plan.user_plan"
				class="cta cta-payed"
				disabled
			>
				<span class="inner">Приобретен</span>
			</button>

			<button v-else class="cta">Купить</button>
		</form>

		<!-- <Promotion class="promo-mobile" v-on:apply-promo="onApply" /> -->
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

// import Promotion from '@/components/Promotion'

export default {
	components: {
		// Promotion,
	},
	props: ['plan', 'onApply'],
	computed: {
		...mapGetters('auth', ['loggedIn']),
	},
	methods: {
		submitForm(e) {
			if (!this.loggedIn) {
				e.preventDefault()
				this.$router.push({ name: 'register', query: { nextRoute: 'pay' } })
			}
		},
	},
}
</script>

<style lang="postcss" scoped>
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

	.plan-name {
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
		font-weight: bold;
		font-size: 60px;
		margin: 1rem 0;
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

	.old-price {
		font-size: 2rem;
		line-height: 120%;
		color: #999999;
		border: none;
		position: absolute;
		bottom: 0;
		left: 2.8rem;
		pointer-events: none;

		&::after {
			content: '';
			display: block;
			width: 60px;
			height: 2px;
			background-color: #999999;
			position: absolute;
			top: 50%;
			left: 0%;
			transform: rotate(-40deg);
		}
	}

	.content {
		>>> ul {
			list-style: none;
			margin: 1.8rem 0 4rem 0;
			padding: 0;
			text-align: left;

			li {
				margin-bottom: 0.8rem;
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
		background-color: #8f52ff;
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

		&-payed {
			color: #007a22;
			margin: 0;
			background-color: #e5ffed;
			pointer-events: none;

			.inner {
				position: relative;

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
	}
}
</style>
