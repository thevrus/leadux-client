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
	background-color: #323232;
	box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.16);
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
	background-color: #323232;
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
		background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjYiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS43MTk0LjI3NTg1YS45NDg2NC45NDg2NCAwIDAwLTEuMzM3NTYgMEw0Ljk3NjI4IDMuNjMzOTggMS42MTgxNi4yNzU4NWEuOTQ4NjQuOTQ4NjQgMCAwMC0xLjMzNzU2IDAgLjk0ODYzLjk0ODYzIDAgMDAwIDEuMzQ3MDVsNC4wMjIxNiA0LjAyMjE2YS45NDg3Ljk0ODcgMCAwMDEuMDM4MzQuMjA3NjQuOTQ4Ny45NDg3IDAgMDAuMzA4NzEtLjIwNzY0TDkuNzE5NCAxLjYyMjlBLjk0ODcuOTQ4NyAwIDAwOS45MjcwNC41ODQ1NmEuOTQ4NjYuOTQ4NjYgMCAwMC0uMjA3NjQtLjMwODd6IiBmaWxsPSIjOTY5Njk2Ii8+PC9zdmc+');
		background-size: cover;
		display: block;
		top: 20px;
		right: 20px;
	}
}
</style>
