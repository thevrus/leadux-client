<template>
	<div class="promo-wrapp">
		<button v-if="!showPromo" class="info" @click="showPromo = !showPromo">
			У меня есть промокод
		</button>

		<div v-else>
			<form v-if="!isValid" class="form" @submit.prevent="checkPromo">
				<input
					v-model="promocode"
					required
					type="text"
					class="input"
					placeholder="Введите промокод"
				/>

				<button class="submit">
					Применить
				</button>
			</form>

			<span v-else class="promo-result">
				Использован промокод:
				<span class="promo-value">{{ promocode }}</span>

				<span @click="discardPromo" class="promo-close">
					<div class="promo-cross"></div>
				</span>
			</span>
		</div>

		<p v-if="isValid == false" class="promo-error">Введен неверный промокод</p>
	</div>
</template>

<script>
export default {
	props: ['isValid'],
	data() {
		return {
			showPromo: false,
			promocode: '',
		}
	},

	methods: {
		checkPromo() {
			if (!this.promocode) return

			this.$emit('apply-promo', this.promocode)
		},

		discardPromo() {
			this.promocode = ''
			this.showPromo = false
			this.$emit('discard-promo')
		},
	},
}
</script>

<style lang="postcss" scoped>
.promo-wrapp {
	margin-top: 1.5rem;
	text-align: center;

	.info {
		cursor: pointer;
		border: 0;
		background: none;
		font-family: Freigeist, system-ui;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		color: #1a1a1a;
		padding: 0.5rem 1rem;
		transition: background-color 0.3s;
		letter-spacing: 0.2px;
		border-radius: 8px;
		outline: none;

		&:hover {
			background-color: #ebebeb;
		}
	}

	.form {
		position: relative;
		max-width: 260px;
		margin: 0 auto;
		appearance: none;
	}

	.input {
		width: 100%;
		padding: 0.85rem 0.75rem;
		font-weight: 500;
		font-size: 1rem;
		line-height: 120%;
		letter-spacing: 0.5px;
		color: #000;
		background-color: #fff;
		border: 1px solid #e5e5e5;
		border-radius: 8px;
		appearance: none;
		outline: none;

		&::placeholder {
			font-size: 0.85rem;
		}
	}

	.submit {
		padding: 0.62rem;
		font-size: 0.75rem;
		letter-spacing: 0.1px;
		color: #0f0f0f;
		background-color: #e6e6e6;
		border: none;
		border-radius: 6px;
		width: 94px;
		cursor: pointer;
		position: absolute;
		top: 50%;
		right: 0.75rem;
		transform: translateY(-50%);
		appearance: none;
		font-family: Freigeist, system-ui;
		font-style: normal;
		font-weight: 500;
		outline: none;
	}

	.promo-error {
		margin: 0.6rem 0 0;
		font-weight: 500;
		font-size: 0.8rem;
		line-height: 120%;
		text-align: center;
		color: #f40000;
	}

	.promo-result {
		text-align: center;
		margin: 0.6rem 1rem 0 0;
		font-weight: 500;
		font-size: 0.8rem;
		color: #808080;
		display: flex;
		align-items: baseline;
		justify-content: center;

		.promo-value {
			color: #00b833;
			font-weight: 700;
			margin-left: 0.4rem;
		}

		.promo-close {
			width: 16px;
			height: 16px;
			cursor: pointer;
			margin-left: 1rem;
			position: relative;
			align-self: center;

			.promo-cross {
				display: block;
				width: 1.5px;
				height: 16px;
				transform: rotate(45deg);
				background-color: #000;
				border-radius: 4px;

				&::after {
					content: '';
					background-color: #000;
					width: 1.5px;
					border-radius: 4px;
					height: 16px;
					position: absolute;
					transform: rotate(90deg);
					top: 0;
					right: 0;
					cursor: pointer;
				}
			}
		}
	}
}
</style>
