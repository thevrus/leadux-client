import DataService from '@/services/data.service'
import ls from '@/services/ls.service'

const initialState = {
	exercises: [],
	completedExercises: ls.find('completedExercises') || [],
}

export const exercises = {
	namespaced: true,
	state: initialState,
	actions: {
		loadExercises({ commit }) {
			return new Promise((resolve, reject) => {
				DataService.getExercises()
					.then(({ data }) => {
						commit('SET_EXERCISES', data)

						resolve(data)
					})
					.catch(error => reject(error))
			})
		},
		toggleCompletedExercise({ commit }, exerciseId) {
			if (!ls.find('completedExercises')) {
				ls.create('completedExercises', [exerciseId])
			} else {
				let completedExercises = ls.find('completedExercises')

				completedExercises.includes(exerciseId)
					? completedExercises.splice(completedExercises.indexOf(exerciseId), 1)
					: completedExercises.push(exerciseId)

				ls.create('completedExercises', completedExercises)
			}

			commit('TOGGLE_COMPLETED_EXERCISE', exerciseId)
		},
	},
	mutations: {
		SET_EXERCISES(state, exercises) {
			state.exercises = exercises
		},
		TOGGLE_COMPLETED_EXERCISE(state, exerciseId) {
			if (state.completedExercises.includes(exerciseId)) {
				state.completedExercises.splice(
					state.completedExercises.indexOf(exerciseId),
					1
				)
			} else {
				state.completedExercises.push(exerciseId)
			}
		},
	},
	getters: {
		getExercises(state) {
			return state.exercises
		},
		completedExercises(state) {
			return state.completedExercises
		},
	},
}
