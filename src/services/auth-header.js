import ls from '@/services/ls.service'

export default function authHeader() {
	const user = ls.find('user')

	if (!user || !user.jwt) return {}

	return {
		Authorization: `Bearer ${user.jwt}`,
		'Content-Type': 'application/json',
	}
}
