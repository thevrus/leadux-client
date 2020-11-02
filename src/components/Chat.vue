<template functional>
	<a
		href="https://www.t.me/designeroq"
		target="_blank"
		class="chat"
		title="Задать вопрос"
	>
	</a>
</template>

<style lang="postcss" scoped>
.chat {
	width: 54px !important;
	height: 54px !important;
	border-radius: 54px !important;
	background-color: #252525;
	position: fixed;
	z-index: 10;
	bottom: 24px;
	right: 24px;
	cursor: pointer;
	transition: opacity 0.3s;
	background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PGRlZnMvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMiAxbC01IDI1cy0xIDItMyAxbC0xMi05LTQtMi03LTItMS0xIDEtMkwyOSAwczMtMSAzIDF6Ii8+PHBhdGggZmlsbD0iI0QyRTVGMSIgZD0iTTEyIDI2bC0xLTEtMy05TDI1IDZoMUwxMiAxOCIvPjxwYXRoIGZpbGw9IiNCNUNGRTQiIGQ9Ik0xNyAyMmwtNSA0di04Ii8+PC9zdmc+');
	background-repeat: no-repeat;
	background-position: 40% center;

	&:hover {
		opacity: 0.8;
	}
}
</style>
