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
			return AuthService.login(user).then(
				user => {
					commit('LOGIN_SUCCESS', user)
					return Promise.resolve(user)
				},
				error => {
					commit('LOGIN_FAILURE')
					return Promise.reject(error)
				}
			)
		},
		register({ commit }, user) {
			return AuthService.register(user).then(
				user => {
					commit('REGISTER_SUCCESS')
					return Promise.resolve(user)
				},
				error => {
					commit('REGISTER_FAILURE')
					return Promise.reject(error)
				}
			)
		},
		logout({ commit }) {
			AuthService.logout()
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
		REGISTER_SUCCESS(state) {
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
}
