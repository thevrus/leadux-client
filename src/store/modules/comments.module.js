import DataService from '@/services/data.service'

export const comments = {
	namespaced: true,
	state: {
		comments: [],
	},
	actions: {
		loadComments({ commit }) {
			return new Promise((resolve, reject) => {
				DataService.getComments()
					.then(({ data }) => {
						commit('SET_COMMENTS', data)

						resolve(data)
					})
					.catch(error => reject(error))
			})
		},
	},
	mutations: {
		SET_COMMENTS(state, comments) {
			state.comments = comments
		},
	},
	getters: {
		getComments(state) {
			return state.comments
		},
	},
}
