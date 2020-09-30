<template>
	<div class="wrapp">
		<div class="avatar" @click="showUserInfo">
			<div v-if="user.avatar">
				<img :src="user.avatar" alt="Avatar" class="user__img" />
			</div>
			<div class="avatar__letter" v-else>
				{{ user.userName | capitalize }}
			</div>
		</div>
		<div class="user">
			<div class="user__nick">{{ user.userName }}</div>
			<div class="user__status">{{ user.userStatus }}</div>
			<transition name="fade" mode="out-in" appear>
				<div class="user__info-wrapper" v-show="userInfo">
					<div class="avatar" @click="showUserInfo">
						<div v-if="user.avatar">
							<img :src="user.avatar" alt="Avatar" class="user__img" />
						</div>
						<div class="avatar__letter" v-else>
							{{ user.userName | capitalize }}
						</div>
					</div>

					<div class="user__details">
						<div class="user__nick">{{ user.userName }}</div>
						<div class="user__email">{{ user.userEmail }}</div>
						<button @logout="logout" class="logout">Выйти</button>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserDetails',

	data() {
		return {
			userInfo: false,
			user: {
				userName: 'wowa',
				userEmail: 'test4test@gmail.com',
				userStatus: 'Тестовый доступ',
				avatar: null,
				//   "https://avatars1.githubusercontent.com/u/25208437?s=460&u=3d367c58a7d9341ac0ff526030353d93030e4f74&v=4",
			},
		}
	},

	methods: {
		showUserInfo() {
			return (this.userInfo = !this.userInfo)
		},
		logout() {},
	},

	filters: {
		capitalize(value) {
			if (!value) return ''
			value = value.toString()
			return value.slice(0, 2).toUpperCase()
		},
	},
}
</script>

<style scoped>
.wrapp {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	flex-shrink: 0;
}

.avatar {
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background-color: #76b680;
	position: relative;
	margin-right: 1rem;
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
	right: -36.4px;
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