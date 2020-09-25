import axios from 'axios'
import authHeader from './auth-header'

class UserService {
	me() {
		return axios.get(process.env.VUE_APP_API_URL + 'users/me', {
			headers: authHeader(),
		})
	}

	getLessons() {
		return axios.get(process.env.VUE_APP_API_URL + 'lessons', {
			headers: authHeader(),
		})
	}

	getLesson(slug = '') {
		return axios.get(`${process.env.VUE_APP_API_URL}lessons?slug=${slug}`, {
			headers: authHeader(),
		})
	}
}

export default new UserService()
