import AuthService from '@/services/auth.service'

const user = JSON.parse(localStorage.getItem('user'))
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
	},
}
