import DataService from '@/services/data.service'

export const questions = {
	namespaced: true,
	state: {
		questions: [],
	},
	actions: {
		getQuestions({ commit }) {
			return new Promise((resolve, reject) => {
				DataService.getQuestions()
					.then(({ data }) => {
						commit('SET_QUESTIONS', data)

						resolve(data)
					})
					.catch(error => reject(error))
			})
		},
	},
	mutations: {
		SET_QUESTIONS(state, questions) {
			state.questions = questions
		},
	},
	getters: {
		questions(state) {
			return state.questions.slice().reverse()
		},
	},
}
