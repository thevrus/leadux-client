import axios from 'axios'
import authHeader from './auth-header'

class DataService {
	me() {
		return axios.get(process.env.VUE_APP_API_URL + 'users/me', {
			headers: authHeader(),
		})
	}

	getLesson(slug = '') {
		return axios.get(`${process.env.VUE_APP_API_URL}lessons?slug=${slug}`, {
			headers: authHeader(),
		})
	}

	getPlaylists() {
		return axios.get(process.env.VUE_APP_API_URL + 'playlists', {
			headers: authHeader(),
		})
	}
}

export default new DataService()
