<template>
	<div class="panel">
		<Tabs />
		<div class="panel-body">
			<Comments />
			<Exercises />
			<Materials />
		</div>
	</div>
</template>

<script>
import Tabs from '@/components/panel/Tabs'
import Comments from '@/components/panel/comments/Comments'
import Exercises from '@/components/panel/exercises/Exercises'
import Materials from '@/components/panel/materials/Materials'

export default {
	components: {
		Tabs,
		Comments,
		Exercises,
		Materials,
	},
}
</script>

<style lang="postcss" scoped>
.panel {
	background-color: var(--panel-bg);
	padding-bottom: 2rem;
	border-radius: 10px;
	border: 1px solid var(--panel-border);
	box-shadow: 0px 2px 6px 0px #000000 20%;

	&-body {
		padding: 0 4rem;
	}
}
</style>
