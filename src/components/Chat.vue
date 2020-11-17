<template><span></span></template>

<script>
export default {
	mounted() {
		window.$crisp = []
		window.CRISP_WEBSITE_ID = '9e1dfe79-2774-4204-b877-5197d83762bd'
		const script = document.createElement('script')
		script.setAttribute('src', 'https://client.crisp.chat/l.js')
		script.async = 1
		document.head.appendChild(script)
	},
}
</script>
