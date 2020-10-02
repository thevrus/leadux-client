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
			commit('SET_LESSONS', lessons)
		},
		setPlaylists({ commit }, playlists) {
			commit('SET_PLAYLISTS', playlists)
		},
		setCurrentLesson({ commit }, lesson) {
			localStorage.setItem('currentLesson', JSON.stringify(lesson))
			commit('SET_CURRENT_LESSON', lesson)
		},
		clearCurrentLesson({ commit }) {
			localStorage.removeItem('currentLesson')
			commit('CLEAR_CURRENT_LESSON')
		},
	},
	mutations: {
		SET_LESSONS(state, lessons) {
			state.lessons = lessons
		},
		SET_PLAYLISTS(state, playlists) {
			playlists.forEach(pl => {
				pl.lessons.forEach(les => {
					les.isWatched = false
				})
			})
			state.playlists = playlists
		},
		SET_CURRENT_LESSON(state, payload) {
			state.currentLesson = payload
		},
		CLEAR_CURRENT_LESSON(state) {
			state.currentLesson = null
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
