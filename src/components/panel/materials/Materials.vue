<template>
	<div v-if="!loading">
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
	font-family: Freigeist;
	font-weight: 500;
	font-size: 0.85rem;
	color: #ffffff;
	background-color: #323232;
	box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.16);
	border-radius: 10px;
	border: 0;
	cursor: pointer;
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
		background-image: url('../../../assets/img/select_arrow.svg');
		background-size: cover;
		display: block;
		top: 20px;
		right: 20px;
	}
}
</style>
