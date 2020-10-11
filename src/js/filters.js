const capitalize = value => {
	if (!value) return ''
	return value
		.toString()
		.slice(0, 2)
		.toUpperCase()
}

export { capitalize }
