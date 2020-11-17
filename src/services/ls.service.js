export default {
	find(value) {
		return JSON.parse(window.localStorage.getItem(value))
	},
	create(key, value) {
		window.localStorage.setItem(key, JSON.stringify(value))
	},
	delete(key) {
		window.localStorage.removeItem(key)
	},
	clear() {
		window.localStorage.clear()
	},
}
