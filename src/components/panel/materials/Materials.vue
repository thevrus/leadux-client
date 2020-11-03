<template>
	<div v-if="!loading && materials.length > 0">
		<div class="select">
			<select v-model="selectedCategory">
				<option
					v-for="category of materials"
					:key="category.id"
					:value="category"
				>
					{{ category.title }}
				</option>
			</select>
			<span class="select-arrow"></span>
		</div>

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
		...mapGetters('materials', ['materials']),
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
ul {
	padding: 0;
}
li {
	list-style: none;
	margin-bottom: 2.25rem;
}
select {
	padding: 0.85rem 4rem 0.85rem 1.5rem;
	font-weight: 500;
	font-size: 0.85rem;
	color: #ffffff;
	letter-spacing: 0.2px;
	background-color: var(--secondary);
	border-radius: 10px;
	border: 0;
	cursor: pointer;
	appearance: none;
}

.select {
	position: relative;
	display: inline-block;
	margin-bottom: 3rem;
}

.select-arrow {
	width: 2rem;
	height: 100%;
	position: absolute;
	border-radius: 10px;
	display: block;
	top: 0px;
	right: 0px;
	pointer-events: none;

	&::after {
		content: '';
		width: 10px;
		height: 6px;
		position: absolute;
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI2IiBmaWxsPSJub25lIj48ZGVmcy8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEwIDBhMSAxIDAgMDAtMiAwTDUgNCAyIDBhMSAxIDAgMTAtMiAybDQgNGExIDEgMCAwMDIgMGw0LTRhMSAxIDAgMDAwLTJ6Ii8+PC9zdmc+');
		background-size: cover;
		display: block;
		top: 20px;
		right: 20px;
	}
}
</style>
