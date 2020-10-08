<template>
	<div class="fl-sh0">
		<div class="unregistered__wrapp" v-if="!loggedIn">
			<router-link class="register-btn" to="/register">Регистрация</router-link>
			<router-link class="login-btn" to="/login">Вход</router-link>
		</div>
		<div class="registered__wrapp" v-if="loggedIn && user">
			<div class="user">
				<div class="user__nick">{{ user.username }}</div>
				<div class="user__status">{{ user.role.description }}</div>
				<transition name="fade" mode="out-in" appear>
					<div class="user__info-wrapper" v-show="userInfo">
						<div class="user__details">
							<div class="user__nick">{{ user.username }}</div>
							<div class="user__email">{{ user.email }}</div>
							<button v-if="loggedIn" @click.prevent="logout" class="logout">
								Выйти
							</button>
						</div>

						<div class="avatar" @click="toggleUserInfo">
							<div v-if="user.avatar">
								<img
									:src="host_url + user.avatar.url"
									alt="Avatar"
									class="user__img"
								/>
							</div>
							<div class="avatar__letter" v-else>
								{{ user.username | capitalize }}
							</div>
						</div>
					</div>
				</transition>
			</div>
			<div class="avatar" @click="toggleUserInfo">
				<div v-if="user.avatar">
					<img
						:src="host_url + user.avatar.url"
						alt="Avatar"
						class="user__img"
					/>
				</div>
				<div class="avatar__letter" v-else>
					{{ user.username | capitalize }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserDetails',

	data() {
		return {
			userInfo: false,
			host_url: process.env.VUE_APP_API_URL,
		}
	},
	methods: {
		toggleUserInfo() {
			return (this.userInfo = !this.userInfo)
		},
		logout() {
			this.$store.dispatch('auth/logout')
			this.$store.dispatch('lessons/clearCurrentLesson')
			window.location.reload()
		},
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		},

		user() {
			return this.$store.state.auth.user.user
		},
	},
	filters: {
		capitalize(value) {
			if (!value) return ''
			return value
				.toString()
				.slice(0, 2)
				.toUpperCase()
		},
	},
}
</script>

<style scoped lang="scss">
.registered__wrapp {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}

.register-btn {
	padding: 0.75rem 1.5rem;
	background-color: rgba(255, 255, 255, 0.04);
	border-radius: 7px;
	color: #fff;
	font-weight: 500;
	font-size: 1rem;
	line-height: 1rem;
	transition: background-color 0.3s;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
}

.login-btn {
	padding: 0.75rem 1.5rem;
	border-radius: 7px;
	color: rgba(255, 255, 255, 0.6);
	font-weight: 500;
	font-size: 1rem;
	margin-left: 1rem;
	line-height: 1rem;
	transition: background-color 0.3s;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
}

.avatar {
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background: linear-gradient(180deg, #93e3a0 0%, #5b8b62 100%);
	position: relative;
	margin-left: 1rem;
	overflow: hidden;
	cursor: pointer;
}

.avatar__letter {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -46%);
	user-select: none;
	font-weight: bold;
	font-size: 1rem;
	color: #ffffff;
}

.user__nick {
	font-weight: 500;
	font-size: 1rem;
	line-height: 140%;
	color: #f4f4f4;
	cursor: pointer;
}

.user__img {
	object-fit: cover;
	width: 100%;
}

.user__status,
.logout,
.user__email {
	font-weight: 500;
	font-size: 0.87rem;
	line-height: 140%;
	color: #787878;
}

.logout {
	padding: 0.3rem 0.5rem;
	transition: all 0.3s;
	background: transparent;
	cursor: pointer;
	border: none;
	appearance: none;
	margin-left: -0.5rem;
}
.logout:hover {
	background-color: #262626;
	border-radius: 6px;
	color: #fff;
}

.user__info-wrapper {
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: absolute;
	top: -31px;
	right: -18.9px;
	background-color: #2c2c2c;
	padding: 1rem 1.1rem 1rem 1rem;
	border-radius: 12px;
	border: 1px solid #363636;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
