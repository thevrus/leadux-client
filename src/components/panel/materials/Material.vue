<template>
	<div>
		<p>{{ material.number }} | {{ material.title }}</p>
		<br />
		<p>{{ material.description }}</p>
		<a :href="material.link" target="_blank" rel="noopener noreferrer">{{
			material.link
		}}</a>
	</div>
</template>

<script>
export default {
	props: {
		material: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="postcss" scoped>
div {
	display: block;
	color: #fff;

	a {
		color: white;
		text-decoration: underline;
	}
}
</style>
