import axios from 'axios'
import authHeader from './auth-header'

class DataService {
	getLessons() {
		return axios.get(process.env.VUE_APP_API_URL + '/playlists', {
			headers: authHeader(),
		})
	}
	getComments() {
		return axios.get(process.env.VUE_APP_API_URL + '/comments', {
			headers: authHeader(),
		})
	}
	addComment(id, comment) {
		return axios({
			method: 'post',
			url: `${process.env.VUE_APP_API_URL}/lessons/${id}/comment`,
			headers: authHeader(),
			data: {
				comment,
			},
		})
	}
}

export default new DataService()
