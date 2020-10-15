const capitalize = value => {
	if (!value) return ''
	return value
		.toString()
		.slice(0, 2)
		.toUpperCase()
}

const time = value => {
	if (!value || typeof value !== 'number') return value
	return Math.floor(value / 60) + ' мин.'
}

export { capitalize, time }
