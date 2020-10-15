import AuthService from '@/services/auth.service'
import ls from '@/services/ls.service'

const user = ls.find('user')
const state = user
	? { status: { loggedIn: true }, user }
	: { status: { loggedIn: false }, user: null }

export const auth = {
	namespaced: true,
	state,
	actions: {
		login({ commit }, user) {
			return new Promise((resolve, reject) => {
				AuthService.login(user).then(
					({ data }) => {
						data.jwt && ls.create('user', data)
						commit('LOGIN_SUCCESS', data)

						return resolve(data)
					},
					error => {
						commit('LOGIN_FAILURE')
						return reject(error)
					}
				)
			})
		},
		register({ commit }, user) {
			return new Promise((resolve, reject) => {
				AuthService.register(user).then(
					({ data }) => {
						data.jwt && ls.create('user', data)
						commit('REGISTER_SUCCESS', data)

						return resolve(data)
					},
					error => {
						commit('REGISTER_FAILURE')
						return reject(error)
					}
				)
			})
		},
		logout({ commit }) {
			ls.delete('user')
			commit('LOGOUT')
		},
		me({ commit }) {
			AuthService.me().then(({ data }) => {
				ls.create('user', { jwt: state.user.jwt, user: state.user.user })
				commit('SET_USER', data)
			})
		},
	},
	mutations: {
		LOGIN_SUCCESS(state, user) {
			state.status.loggedIn = true
			state.user = user
		},
		LOGIN_FAILURE(state) {
			state.status.loggedIn = false
			state.user = null
		},
		REGISTER_SUCCESS(state, user) {
			state.status.loggedIn = true
			state.user = user
		},
		REGISTER_FAILURE(state) {
			state.status.loggedIn = false
		},
		LOGOUT(state) {
			state.status.loggedIn = false
			state.user = null
		},
		SET_USER(state, user) {
			state.user.user = user
		},
	},
	getters: {
		user(state) {
			return state.user ? state.user.user : null
		},
		loggedIn(state) {
			return state.status.loggedIn
		},
	},
}
