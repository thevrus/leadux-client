<template>
	<div v-if="!loading && materials.length > 0" class="wrapp">
		<div v-if="!isStudent" class="overlay">
			<router-link
				v-if="!isStudent"
				:to="{ name: routerLink, query: { nextRoute: 'pay' } }"
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
	components: {
		Material,
	},
	data() {
		return { loading: true, selectedCategory: null }
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
			margin: 15rem auto 0;

			&::before {
				content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NyIgaGVpZ2h0PSI5NiIgZmlsbD0ibm9uZSI+PGRlZnMvPjxwYXRoIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbCkiIGQ9Ik05MS4wNiAyNS4xNXMtMi45LTEzLjgzLTE1LjQtMTguNjlDNjkuNzggNC4yMiA1OS4wNSAzLjEgNDguNSAzYy0xMC41NS4xLTIxLjI4IDEuMjItMjcuMTYgMy40Ni0xMi41IDQuODYtMTUuNCAxOC43LTE1LjQgMTguN2E5NC40OCA5NC40OCAwIDAwLTIuNDMgMjIuOCA5MC4zIDkwLjMgMCAwMDIuNDMgMjIuODlzMi45IDEzLjgzIDE1LjQgMTguNjlDMjcuMjIgOTEuNzggMzcuOTUgOTIuOSA0OC41IDkzYzEwLjU1LS4xIDIxLjI4LTEuMTIgMjcuMTYtMy40NiAxMi41LTQuODYgMTUuNC0xOC43IDE1LjQtMTguN2E5NC40NyA5NC40NyAwIDAwMi40My0yMi44Yy4xLTcuMS0uNDctMTUuMDQtMi40My0yMi44OXptLTI1LjMgMzkuNzJjMCAxLjUtMS4wMiAyLjctMi40MiAyLjdIMzMuNzVjLTEuMyAwLTIuNDItMS4yLTIuNDItMi43bC0uMi0xOS45YzAtMS4zMiAxLjIyLTIuNDQgMi43Mi0yLjQ0aDUuMDR2LTQuNThhOS42IDkuNiAwIDExMTkuMjIgMHY0LjU4aDUuMDRjMS41IDAgMi43MSAxLjAzIDIuNzEgMi40M2wtLjEgMTkuOXoiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZmlsbD0iI0YyRjJGMiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNzAuMjMgMTQuNzdjMTAgMy44OCAxMi4zMiAxNC45NSAxMi4zMiAxNC45NWE3Mi4yNCA3Mi4yNCAwIDAxMS45NCAxOC4zMmMuMDggNS42LS40NSAxMS45Ni0xLjk0IDE4LjI0IDAgMC0yLjMxIDExLjA3LTEyLjMyIDE0Ljk1LTQuNyAxLjg3LTEzLjMgMi43LTIxLjczIDIuNzctOC40NC0uMDctMTcuMDMtLjk3LTIxLjczLTIuNzctMTAtMy44OC0xMi4zMi0xNC45NS0xMi4zMi0xNC45NWE3Mi4yNCA3Mi4yNCAwIDAxLTEuOTQtMTguMzJjLS4wOC01LjYuNDUtMTEuOTYgMS45NC0xOC4yNCAwIDAgMi4zMS0xMS4wNyAxMi4zMi0xNC45NSA0LjctMS44IDEzLjMtMi43IDIxLjczLTIuNzcgOC40NC4wNyAxNy4wMy45NyAyMS43MyAyLjc3em0tOS44NiA0OC45YzEuMTIgMCAxLjk0LS45OCAxLjk0LTIuMTdsLjA4LTE1LjkzYzAtMS4xMi0uOTctMS45NC0yLjE3LTEuOTRINTYuMnYtMy42N2E3LjY5IDcuNjkgMCAxMC0xNS4zOCAwdjMuNjdoLTQuMDNjLTEuMiAwLTIuMTcuOS0yLjE3IDEuOTRsLjE1IDE1LjkzYzAgMS4yLjkgMi4xNiAxLjk0IDIuMTZoMjMuNjd6bS0xNS4yMy0yMy43YTMuNDggMy40OCAwIDAxMy40My0zLjQ1IDMuNDggMy40OCAwIDAxMy40NCAzLjQ0djMuNjdoLTYuODd2LTMuNjd6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWwiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg5MCAuMjUgNDguMjUpIHNjYWxlKDQ0Ljk5NzcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PC9zdmc+');
				position: absolute;
				width: 96px;
				height: 96px;
				top: -7rem;
				left: 50%;
				transform: translateX(-50%);
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
