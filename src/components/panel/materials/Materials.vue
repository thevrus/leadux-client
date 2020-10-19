<template>
	<div v-if="!loading">
		<select v-model="selectedCategory">
			<option
				v-for="category of materials"
				:key="category.id"
				:value="category"
			>
				{{ category.title }}
			</option>
		</select>

		<ul>
			<li v-for="material of selectedCategory.materials" :key="material.id">
				<Material :material="material" />
			</li>
		</ul>
	</div>
</template>

<script>
import Material from '@/components/panel/materials/Material'
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return { loading: true, selectedCategory: null }
	},
	components: {
		Material,
	},
	computed: {
		...mapGetters('auth', ['loggedIn']),
		...mapGetters('materials', { materials: 'getMaterials' }),
	},
	methods: {
		...mapActions('materials', ['loadMaterials']),
	},
	mounted() {
		this.loadMaterials().then(() => {
			this.loading = false
			this.selectedCategory = this.materials[0]
		})
	},
}
</script>

<style lang="postcss" scoped>
div {
	display: block;
}
</style>
