<template>
	<div class="panel">
		<Tabs />
		<div class="panel-body">
			<Comments />
			<!-- <Tasks /> -->
			<!-- <Materials /> -->
		</div>
	</div>
</template>

<script>
import Tabs from '@/components/Tabs'
import Comments from '@/components/Comments'

export default {
	components: {
		Tabs,
		Comments,
	},
}
</script>

<style lang="postcss" scoped>
.panel {
	background-color: #2c2c2c;
	padding-bottom: 2rem;
	border-radius: 10px;
	border: 1px solid #363636;
	box-shadow: 0px 2px 6px 0px #000000 20%;

	&-body {
		padding: 0 4rem;
	}
}
</style>
