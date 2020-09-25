export default function authHeader() {
	const user = JSON.parse(localStorage.getItem('user'))

	if (!user || !user.jwt) return {}

	return { Authorization: `Bearer ${user.jwt}` }
}
