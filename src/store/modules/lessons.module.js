const initialState = {
	lessons: [],
	playlists: [],
	currentLesson: JSON.parse(localStorage.getItem('currentLesson')),
}

export const lessons = {
	namespaced: true,
	state: initialState,
	actions: {
		setLessons({ commit }, lessons) {
			commit('setLessons', lessons)
		},
		setPlaylists({ commit }, playlists) {
			commit('setPlaylists', playlists)
		},
		setCurrentLesson({ commit }, lesson) {
			localStorage.setItem('currentLesson', JSON.stringify(lesson))
			commit('setCurrentLesson', lesson)
			// TODO
			//* set first video as current lesson
			// * update search params in url
		},
		clearCurrentLesson({ commit }) {
			commit('clearCurrentLesson')
		},
	},
	mutations: {
		setLessons(state, payload) {
			state.lessons = payload
		},
		setPlaylists(state, payload) {
			payload.forEach(pl => {
				pl.lessons.forEach(les => {
					les.isWatched = false
				})
			})
			state.playlists = payload
		},
		setCurrentLesson(state, payload) {
			state.currentLesson = payload
		},
		clearCurrentLesson(state) {
			state.currentLesson = null
			localStorage.removeItem('currentLesson')
		},
	},
	getters: {
		getCurrentLesson(state) {
			return state.currentLesson
		},

		getPlaylists(state) {
			const sort = (a, b) => a.order - b.order

			const sorted = state.playlists.sort(sort).map(playlist => {
				playlist.lessons = playlist.lessons.sort(sort)

				return playlist
			})

			return sorted
		},

		getLessonsLength(state) {
			let count = 0
			state.playlists.forEach(pl => {
				count += pl.lessons.length
			})

			return count
		},
	},
}
