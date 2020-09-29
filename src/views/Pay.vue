<template>
	<div>
		<div v-if="data && signature">
			<form
				method="POST"
				accept-charset="utf-8"
				action="https://www.liqpay.ua/api/3/checkout"
			>
				<input type="hidden" name="data" :value="data" />
				<input type="hidden" name="signature" :value="signature" />
				<button>
					<span style="vertical-align:middle; !important"
						>Оплатить {{ amount }} {{ currency }}</span
					>
				</button>
			</form>
		</div>
		<div v-else>Loading...</div>
	</div>
</template>

<script>
import AuthService from '@/services/auth.service'

export default {
	data() {
		return {
			amount: null,
			currency: null,
			data: null,
			signature: null,
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.loggedIn
		},
	},
	created() {
		// !this.loggedIn && this.$router.push('/login')

		AuthService.invoice().then(({ data }) => {
			this.amount = data.amount
			this.currency = data.currency
			this.data = data.data
			this.signature = data.signature
		})
	},
}
</script>

<style lang="scss" scoped>
button {
	border: none !important;
	display: inline-block !important;
	text-align: center !important;
	padding: 7px 20px !important;
	color: #fff !important;
	font-size: 16px !important;
	font-weight: 600 !important;
	font-family: OpenSans, sans-serif;
	cursor: pointer !important;
	border-radius: 2px !important;
	background: #7ab72b !important;

	img {
		margin-right: 7px !important;
		vertical-align: middle !important;
	}
}
</style>
