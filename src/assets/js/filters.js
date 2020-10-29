const timeSince = date => {
	date = new Date(Date.now() - new Date(date))

	let seconds = Math.floor(date / 1000)

	let interval = seconds / 31536000

	if (interval > 1) {
		return Math.floor(interval) + ' год(а) назад'
	}

	interval = seconds / 2592000
	if (interval > 1) {
		return Math.floor(interval) + ' месяц(ев) назад'
	}

	interval = seconds / 86400
	if (interval > 1) {
		return Math.floor(interval) + ' дней назад'
	}

	interval = seconds / 3600
	if (interval > 1) {
		return Math.floor(interval) + ' час(а) назад'
	}

	interval = seconds / 60
	if (interval > 1) {
		return Math.floor(interval) + ' минут(ы) назад'
	}

	return Math.floor(seconds) + 'только что'
}

export { timeSince }
