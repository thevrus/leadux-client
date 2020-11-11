<template>
	<div v-if="!loading && materials.length > 0" class="wrapp">
		<div class="overlay" v-if="!isStudent">
			<router-link
				:to="{ name: routerLink, query: nextRoute }"
				v-if="!isStudent"
				class="cta mat"
			>
				Открыть полный доступ
			</router-link>
		</div>
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
		...mapGetters('auth', ['loggedIn', 'user', 'isStudent']),
		...mapGetters('materials', ['materials']),

		routerLink() {
			return this.loggedIn ? 'pay' : 'register'
		},
		nextRoute() {
			return this.isStudent ? { nextRoute: 'watch' } : null
		},
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
.wrapp {
	position: relative;

	.overlay {
		position: absolute;
		width: calc(100% + 8rem);
		height: calc(100% + 4.35rem);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(44, 44, 44, 0.7);
		backdrop-filter: blur(16px);
		z-index: 2;
		text-align: center;
		border-radius: 0 0 10px 10px;

		.mat {
			position: relative;
			margin: 10rem 0 0 0;

			&::before {
				content: '';
				position: absolute;
				width: 96px;
				height: 96px;
				top: -6.5rem;
				left: 50%;
				transform: translateX(-50%);
				background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTciIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NyA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4xIiBkPSJNOTEuMDYwOSAyNS4xNTA4QzkxLjA2MDkgMjUuMTUwOCA4OC4xNjc1IDExLjMxOTcgNzUuNjYwNCA2LjQ2MDE1QzY5Ljc4MDMgNC4yMTcyNyA1OS4wNDY2IDMuMDk1ODMgNDguNDk5NyAzLjAwMjM4QzM3Ljk1MjcgMy4wOTU4MyAyNy4yMTkgNC4yMTcyNyAyMS4zMzg5IDYuNDYwMTVDOC44MzE4NSAxMS4zMTk3IDUuOTM4NDMgMjUuMTUwOCA1LjkzODQzIDI1LjE1MDhDNC4wNzE3MSAzMy4wMDA5IDMuNDE4MzYgNDAuOTQ0NCAzLjUxMTcgNDcuOTUzNEMzLjQxODM2IDU1LjA1NTggMy45NzgzOCA2Mi45OTkzIDUuOTM4NDMgNzAuODQ5NEM1LjkzODQzIDcwLjg0OTQgOC44MzE4NSA4NC42ODA1IDIxLjMzODkgODkuNTRDMjcuMjE5IDkxLjc4MjkgMzcuOTUyNyA5Mi45MDQzIDQ4LjQ5OTcgOTIuOTk3OEM1OS4wNDY2IDkyLjkwNDMgNjkuNzgwMyA5MS44NzY0IDc1LjY2MDQgODkuNTRDODguMTY3NSA4NC42ODA1IDkxLjA2MDkgNzAuODQ5NCA5MS4wNjA5IDcwLjg0OTRDOTIuOTI3NiA2Mi45OTkzIDkzLjU4MSA1NS4wNTU4IDkzLjQ4NzYgNDguMDQ2OEM5My41ODEgNDAuOTQ0NCA5My4wMjEgMzMuMDAwOSA5MS4wNjA5IDI1LjE1MDhaTTY1Ljc2NjggNjQuODY4NEM2NS43NjY4IDY2LjM2MzYgNjQuNzQwMSA2Ny41Nzg1IDYzLjM0MDEgNjcuNTc4NUgzMy43NTI2QzMyLjQ0NTkgNjcuNTc4NSAzMS4zMjU4IDY2LjM2MzYgMzEuMzI1OCA2NC44Njg0TDMxLjEzOTIgNDQuOTYyOUMzMS4xMzkyIDQzLjY1NDUgMzIuMzUyNSA0Mi41MzMxIDMzLjg0NTkgNDIuNTMzMUgzOC44ODYxVjM3Ljk1MzlDMzguODg2MSAzMi42MjcgNDMuMTc5NSAyOC4zMjgyIDQ4LjQ5OTcgMjguMzI4MkM1My44MTk4IDI4LjMyODIgNTguMTEzMyAzMi42MjcgNTguMTEzMyAzNy45NTM5VjQyLjUzMzFINjMuMTUzNEM2NC42NDY4IDQyLjUzMzEgNjUuODYwMiA0My41NjExIDY1Ljg2MDIgNDQuOTYyOUw2NS43NjY4IDY0Ljg2ODRaIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWwpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzAuMjI5NyAxNC43NjY0QzgwLjIzNTkgMTguNjU0MyA4Mi41NTA3IDI5LjcxOTcgODIuNTUwNyAyOS43MTk3Qzg0LjExODggMzYuMDAwMSA4NC41NjY5IDQyLjM1NTIgODQuNDkyMiA0OC4wMzc0Qzg0LjU2NjkgNTMuNjQ0OSA4NC4wNDQyIDYwLjAwMDEgODIuNTUwNyA2Ni4yODA0QzgyLjU1MDcgNjYuMjgwNCA4MC4yMzU5IDc3LjM0NTkgNzAuMjI5NyA4MS4yMzM3QzY1LjUyNTQgODMuMTAyOSA1Ni45MzggODMuOTI1MyA0OC41IDg0LjAwMDFDNDAuMDYyIDgzLjkyNTMgMzEuNDc0NiA4My4wMjgxIDI2Ljc3MDMgODEuMjMzN0MxNi43NjQxIDc3LjM0NTkgMTQuNDQ5MyA2Ni4yODA0IDE0LjQ0OTMgNjYuMjgwNEMxMi44ODEyIDYwLjAwMDEgMTIuNDMzMSA1My42NDQ5IDEyLjUwNzggNDcuOTYyN0MxMi40MzMxIDQyLjM1NTIgMTIuOTU1OCAzNi4wMDAxIDE0LjQ0OTMgMjkuNzE5N0MxNC40NDkzIDI5LjcxOTcgMTYuNzY0MSAxOC42NTQzIDI2Ljc3MDMgMTQuNzY2NEMzMS40NzQ2IDEyLjk3MiA0MC4wNjIgMTIuMDc0OCA0OC41IDEyLjAwMDFDNTYuOTM4IDEyLjA3NDggNjUuNTI1NCAxMi45NzIgNzAuMjI5NyAxNC43NjY0Wk02MC4zNzI5IDYzLjY2MzZDNjEuNDkzIDYzLjY2MzYgNjIuMzE0NCA2Mi42OTE2IDYyLjMxNDQgNjEuNDk1NEw2Mi4zODkxIDQ1LjU3MDJDNjIuMzg5MSA0NC40NDg3IDYxLjQxODQgNDMuNjI2MiA2MC4yMjM2IDQzLjYyNjJINTYuMTkxM1YzOS45NjI3QzU2LjE5MTMgMzUuNzAxIDUyLjc1NjMgMzIuMjYxNyA0OC41IDMyLjI2MTdDNDQuMjQzNyAzMi4yNjE3IDQwLjgwODcgMzUuNzAxIDQwLjgwODcgMzkuOTYyN1Y0My42MjYySDM2Ljc3NjRDMzUuNTgxNiA0My42MjYyIDM0LjYxMDkgNDQuNTIzNCAzNC42MTA5IDQ1LjU3MDJMMzQuNzYwMiA2MS40OTU0QzM0Ljc2MDIgNjIuNjkxNiAzNS42NTYzIDYzLjY2MzYgMzYuNzAxNyA2My42NjM2SDYwLjM3MjlaTTQ1LjEzOTQgMzkuOTYyN0M0NS4xMzk0IDM4LjA5MzYgNDYuNzA3NiAzNi41MjM1IDQ4LjU3NDQgMzYuNTIzNUM1MC40NDEyIDM2LjUyMzUgNTIuMDA5MyAzOC4wOTM2IDUyLjAwOTMgMzkuOTYyN1Y0My42MjYzSDQ1LjEzOTRWMzkuOTYyN1oiIGZpbGw9IiNGMkYyRjIiLz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg0OC40OTk3IDQ4LjAwMDEpIHJvdGF0ZSg5MCkgc2NhbGUoNDQuOTk3NykiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K');
			}
		}
	}
}
ul {
	padding: 0;
}
li {
	list-style: none;
	margin-bottom: 2rem;
}
select {
	padding: 0.85rem 4rem 0.85rem 1.5rem;
	font-weight: 500;
	font-size: 0.85rem;
	color: #fff;
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
	top: 0;
	right: 0;
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
