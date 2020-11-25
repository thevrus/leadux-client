import axios from 'axios'
import authHeader from './auth-header'

class AuthService {
	login({ email, password }) {
		return axios.post(`${process.env.VUE_APP_API_URL}/auth/local`, {
			identifier: email,
			password,
		})
	}

	register({ username, email, password }) {
		return axios.post(`${process.env.VUE_APP_API_URL}/auth/local/register`, {
			username,
			email,
			password,
		})
	}

	me() {
		return axios.get(`${process.env.VUE_APP_API_URL}/users/me`, {
			headers: authHeader(),
		})
	}

	invoice() {
		return axios({
			method: 'get',
			url: `${process.env.VUE_APP_API_URL}/users-permissions/invoice`,
			headers: authHeader(),
		})
	}

	invoicePromo(promocode) {
		if (!promocode) return

		return axios({
			method: 'get',
			url: `${process.env.VUE_APP_API_URL}/users-permissions/invoice?promocode=${promocode}`,
			headers: authHeader(),
		})
	}
}

export default new AuthService()
