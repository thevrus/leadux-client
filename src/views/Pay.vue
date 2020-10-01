<template>
	<div>
		<div v-if="plans.length > 0">
			<div v-for="plan in plans" :key="plan.signature">
				<form
					method="POST"
					accept-charset="utf-8"
					action="https://www.liqpay.ua/api/3/checkout"
					style="border: 0.5px solid grey"
				>
					<input type="hidden" name="data" :value="plan.data" />
					<input type="hidden" name="signature" :value="plan.signature" />
					<p>{{ plan.name }}</p>
					<p>{{ plan.description }}</p>
					<button>
						<span style="vertical-align:middle; !important"
							>Оплатить {{ plan.amount }} {{ plan.currency }}</span
						>
					</button>
				</form>
			</div>
		</div>
		<div class="green" v-else>Loading...</div>
	</div>
</template>

<script>
import AuthService from '@/services/auth.service'

export default {
	components: {},
	data() {
		return {
			plans: [],
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
			data.forEach(plan => plan && this.plans.push(plan))
		})
	},
}
</script>

<style lang="scss" scoped>
.green {
	color: #7ab72b;
}
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
