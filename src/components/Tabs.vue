<template>
	<div class="tabs">
		<div class="tab tab--active">Вопросы и ответы</div>
		<div class="tab">Задания</div>
		<div class="tab">Материалы</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tabs {
	display: flex;
	justify-content: space-between;
	color: #6c6c6c;
	border-bottom: 1px solid #3a3a3a;
	margin-bottom: 2.5rem;

	.tab {
		cursor: pointer;
		text-align: center;
		padding: 1.1rem 0;
		width: 100%;
		transition: 0.3s color;

		&--active {
			color: #fff;
			position: relative;

			&::after {
				content: '';
				display: block;
				position: absolute;
				bottom: -1px;
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
				left: 45%;
				width: 40px;
				height: 3px;
				background-color: #733bea;
			}
		}

		&:hover {
			color: #fff;
		}
	}
}
</style>
