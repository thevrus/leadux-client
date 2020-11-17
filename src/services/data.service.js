import axios from 'axios'
import authHeader from './auth-header'

class DataService {
	getLessons() {
		return axios.get(process.env.VUE_APP_API_URL + '/playlists', {
			headers: authHeader(),
		})
	}
	getExercises() {
		return axios.get(
			process.env.VUE_APP_API_URL + '/exercises?_publicationState=live',
			{
				headers: authHeader(),
			}
		)
	}
	getQuestions() {
		return axios.get(process.env.VUE_APP_API_URL + '/questions', {
			headers: authHeader(),
		})
	}
	getMaterials() {
		return axios.get(
			process.env.VUE_APP_API_URL + '/material-types?_publicationState=live',
			{ headers: authHeader() }
		)
	}
	addQuestion(id, text) {
		return axios({
			method: 'post',
			url: `${process.env.VUE_APP_API_URL}/lessons/${id}/question`,
			headers: authHeader(),
			data: {
				text,
			},
		})
	}
	addAnswer(id, text) {
		return axios({
			method: 'post',
			url: `${process.env.VUE_APP_API_URL}/questions/${id}/answer`,
			headers: authHeader(),
			data: {
				text,
			},
		})
	}
}

export default new DataService()
