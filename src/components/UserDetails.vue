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
							<button v-if="loggedIn" @click="userLogout" class="logout">
								Выйти
							</button>
						</div>

						<div @click="toggleUserInfo" class="avatar">
							<Avatar :avatar="user.avatar" :username="user.username" />
						</div>
					</div>
				</transition>
			</div>

			<div @click="toggleUserInfo" class="avatar">
				<Avatar :avatar="user.avatar" :username="user.username" />
			</div>
		</div>
	</div>
</template>

<script>
import Avatar from '@/components/Avatar'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'UserDetails',
	components: { Avatar },
	data() {
		return {
			userInfo: false,
			host_url: process.env.VUE_APP_API_URL,
		}
	},
	computed: {
		...mapGetters('auth', ['user', 'loggedIn']),
	},
	methods: {
		...mapActions('lessons', ['clearCurrentLesson']),
		...mapActions('auth', ['logout']),

		toggleUserInfo() {
			return (this.userInfo = !this.userInfo)
		},
		userLogout() {
			this.logout()
			this.clearCurrentLesson()
			window.location.reload()
		},
	},
}
</script>

<style lang="postcss" scoped>
.fl-sh0 {
	flex-shrink: 0;
}

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
	cursor: pointer;
}

.user {
	margin-right: 1rem;
}

.user__nick {
	font-weight: 500;
	font-size: 1rem;
	line-height: 140%;
	color: #f4f4f4;
	cursor: pointer;
	width: max-content;
	margin-right: 1rem;
}

.user__status,
.logout,
.user__email {
	font-weight: 500;
	font-size: 0.87rem;
	line-height: 140%;
	color: #787878;
}

.user__email {
	width: max-content;
	margin-right: 1rem;
}

.logout {
	padding: 0.3rem 0.5rem;
	transition: all 0.3s;
	background: transparent;
	cursor: pointer;
	border: none;
	appearance: none;
	margin-left: -0.5rem;

	&:hover {
		background-color: #262626;
		border-radius: 6px;
		color: #fff;
	}
}

.user__info-wrapper {
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: absolute;
	top: -27px;
	right: -18.9px;
	background-color: var(--panel-bg);
	padding: 1rem 1.1rem 1rem 1rem;
	border-radius: 12px;
	border: 1px solid var(--panel-border);
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}
</style>
