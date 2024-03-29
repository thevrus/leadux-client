import DataService from '@/services/data.service'
import ls from '@/services/ls.service'

const initialState = {
	playlists: [],
	watchedLessons: ls.find('watchedLessons') || [],
	currentLesson: ls.find('currentLesson') || null,
}

export const lessons = {
	namespaced: true,
	state: initialState,
	actions: {
		loadLessons({ commit }) {
			return new Promise((resolve, reject) => {
				DataService.getLessons()
					.then(({ data }) => {
						commit('SET_LESSONS', data)

						!ls.find('currentLesson') &&
							commit('SET_CURRENT_LESSON', data[0].lessons[0])

						resolve(data)
					})
					.catch(error => reject(error))
			})
		},
		setCurrentLesson({ commit }, lesson) {
			ls.create('currentLesson', lesson)
			commit('SET_CURRENT_LESSON', lesson)
		},
		clearCurrentLesson({ commit }) {
			ls.delete('currentLesson')
			commit('CLEAR_CURRENT_LESSON')
		},
		toggleWatchedLesson({ commit }, lessonId) {
			if (!ls.find('watchedLessons')) {
				ls.create('watchedLessons', [lessonId])
			} else {
				let watchedLessons = ls.find('watchedLessons')

				watchedLessons.includes(lessonId)
					? watchedLessons.splice(watchedLessons.indexOf(lessonId), 1)
					: watchedLessons.push(lessonId)

				ls.create('watchedLessons', watchedLessons)
			}
			commit('TOGGLE_WATCHED_LESSON', lessonId)
		},
	},
	mutations: {
		SET_LESSONS(state, playlists) {
			state.playlists = playlists
		},
		SET_CURRENT_LESSON(state, lesson) {
			state.currentLesson = lesson
		},
		CLEAR_CURRENT_LESSON(state) {
			state.currentLesson = null
		},
		TOGGLE_WATCHED_LESSON(state, lessonId) {
			state.watchedLessons.includes(lessonId)
				? state.watchedLessons.splice(state.watchedLessons.indexOf(lessonId), 1)
				: state.watchedLessons.push(lessonId)
		},
	},
	getters: {
		currentLesson(state) {
			return state.currentLesson
		},
		lessons(state) {
			const sort = (a, b) => a.order - b.order

			const sorted = state.playlists.sort(sort).map(playlist => {
				playlist.lessons = playlist.lessons.sort(sort)

				return playlist
			})

			return sorted
		},
		lessonsLength(state) {
			let count = 0
			state.playlists.forEach(pl => {
				count += pl.lessons.length
			})

			return count
		},
		watchedLessons(state) {
			return state.watchedLessons
		},
		firstLesson(state) {
			return state.playlists[0].lessons[0]
		},
	},
}
