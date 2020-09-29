<template>
	<div class="col-md-12">
		<h3>Login</h3>
		<div class="card card-container">
			<form name="form" @submit.prevent="handleLogin">
				<!-- Email -->
				<div class="form-group">
					<label for="email">Email</label>
					<input
						v-model="user.email"
						type="email"
						class="form-control"
						name="email"
					/>
				</div>

				<!-- Password -->
				<div class="form-group">
					<label for="password">Password</label>
					<input
						v-model="user.password"
						type="password"
						class="form-control"
						name="password"
					/>
				</div>
				<div class="form-group">
					<button class="btn btn-primary btn-block" :disabled="loading">
						<span
							v-show="loading"
							class="spinner-border spinner-border-sm"
						></span>
						<span>Login</span>
					</button>
				</div>
				<div class="form-group">
					<div v-if="message" class="alert alert-danger" role="alert">
						{{ message }}
					</div>
				</div>
			</form>

			<router-link v-if="!loggedIn" to="/register"
				>Don't have an account?</router-link
			>
		</div>
	</div>
</template>

<script>
import User from '../models/user'

export default {
	name: 'Login',
	data() {
		return {
			user: new User('', ''),
			loading: false,
			message: '',
			errors: {
				error: '',
				email: '',
				password: '',
			},
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		},
		// isPayed() {
		// 	return null
		// },
	},
	created() {
		this.loggedIn && this.$router.push('/')
	},
	methods: {
		handleLogin() {
			this.loading = true

			if (this.user.email && this.user.password) {
				this.$store.dispatch('auth/login', this.user).then(
					() => {
						this.$router.push('/watch')
					},
					error => {
						this.loading = false
						this.message =
							(error.response && error.response.data) ||
							error.message ||
							error.toString()
					}
				)
			}
		},
	},
}
</script>

<style scoped>
label {
	display: block;
	margin-top: 10px;
}

.card-container.card {
	max-width: 350px !important;
	padding: 40px 40px;
}

.card {
	background-color: #f7f7f7;
	padding: 20px 25px 30px;
	margin: 0 auto 25px;
	margin-top: 50px;
	-moz-border-radius: 2px;
	-webkit-border-radius: 2px;
	border-radius: 2px;
	-moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
</style>
