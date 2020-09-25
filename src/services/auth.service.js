import axios from 'axios'

class AuthService {
	login(user) {
		return axios
			.post(`${process.env.VUE_APP_API_URL}auth/local`, {
				identifier: user.email,
				password: user.password,
			})
			.then(response => {
				if (response.data.jwt) {
					localStorage.setItem('user', JSON.stringify(response.data))
				}

				return response.data
			})
	}

	register(user) {
		return axios
			.post(`${process.env.VUE_APP_API_URL}auth/local/register`, {
				username: user.username,
				email: user.email,
				password: user.password,
			})
			.then(response => {
				if (response.data.jwt) {
					localStorage.setItem('user', JSON.stringify(response.data))
				}
			})
	}

	logout() {
		localStorage.removeItem('user')
	}
}

export default new AuthService()
