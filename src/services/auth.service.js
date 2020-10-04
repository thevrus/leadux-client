import axios from 'axios'
import authHeader from './auth-header'
import ls from '@/services/ls.service'

class AuthService {
	login({ email, password }) {
		return axios
			.post(`${process.env.VUE_APP_API_URL}/auth/local`, {
				identifier: email,
				password,
			})
			.then(response => {
				response.data.jwt && ls.create('user', response.data)

				return response.data
			})
	}

	register({ username, email, password }) {
		return axios
			.post(`${process.env.VUE_APP_API_URL}/auth/local/register`, {
				username,
				email,
				password,
			})
			.then(response => {
				response.data.jwt && ls.create('user', response.data)
			})
	}

	logout() {
		ls.delete('user')
	}

	me() {
		return axios.get(`${process.env.VUE_APP_API_URL}/users/me`, {
			headers: authHeader(),
		})
	}

	async invoice() {
		// TODO
		// * Interrupt if no response for 2 seconds
		let ip_info = null
		if (process.env.VUE_APP_IP_API) {
			ip_info = await axios.get(process.env.VUE_APP_IP_API)
		}

		return axios({
			method: 'post',
			url: `${process.env.VUE_APP_API_URL}/users-permissions/invoice`,
			headers: authHeader(),
			data: ip_info && ip_info.data,
		})
	}
}

export default new AuthService()
