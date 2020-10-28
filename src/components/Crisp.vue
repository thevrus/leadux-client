<template><span></span></template>

<script>
export default {
	mounted() {
		window.$crisp = []
		window.CRISP_WEBSITE_ID = 'f065e3a1-8eac-4800-93d9-bcbc9221db98'

		const script = document.createElement('script')

		script.setAttribute('src', 'https://client.crisp.chat/l.js')
		script.async = 1

		document.head.appendChild(script)
	},
}
</script>
