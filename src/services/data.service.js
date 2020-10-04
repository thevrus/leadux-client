import axios from 'axios'
import authHeader from './auth-header'

class DataService {
	getLessons() {
		return axios.get(process.env.VUE_APP_API_URL + '/playlists', {
			headers: authHeader(),
		})
	}
}

export default new DataService()
