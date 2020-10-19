import DataService from '@/services/data.service'

export const materials = {
	namespaced: true,
	state: {},
	actions: {
		loadMaterials({ commit }) {
			return new Promise((resolve, reject) => {
				DataService.getMaterials()
					.then(({ data }) => {
						commit('SET_MATERIALS', data)

						resolve(data)
					})
					.catch(error => reject(error))
			})
		},
	},
	mutations: {
		SET_MATERIALS(state, materials) {
			state.materials = materials
		},
	},
	getters: {
		getMaterials(state) {
			return state.materials
		},
	},
}
