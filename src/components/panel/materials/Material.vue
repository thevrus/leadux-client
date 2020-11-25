<template>
	<div class="wrapp">
		<span class="number">{{ material.title | capitalize }}</span>

		<div :class="{ grid: material.cover !== null }">
			<img
				v-if="material.cover"
				class="cover"
				:src="material.cover.url"
				alt=""
			/>

			<span>
				<div class="header">
					<p class="title">{{ material.title }}</p>
					<a
						class="link"
						:href="material.link"
						target="_blank"
						rel="noopener noreferrer"
						>{{ material.link }}
					</a>
				</div>
				<p class="description">{{ material.description }}</p>
			</span>
		</div>
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
	filters: {
		capitalize(value) {
			if (!value) return ''
			return value
				.toString()
				.slice(0, 1)
				.toUpperCase()
		},
	},
}
</script>

<style lang="postcss" scoped>
.wrapp {
	position: relative;
	padding: 1.5rem 2.5rem;
	background-color: #17181c;
	border-radius: 10px;

	.number {
		position: absolute;
		display: block;
		width: 40px;
		height: 40px;
		left: -20px;
		top: -20px;
		padding: 0.5rem;
		background-color: #34bf6c;
		color: white;
		border-radius: 50%;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: 200px 1fr;
		grid-column-gap: 1.2rem;
	}

	.cover {
		width: 100%;
		height: 130px;
		object-fit: cover;
		border-radius: 6px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding-bottom: 1rem;
		border-bottom: 1px solid #434343;

		.title {
			font-weight: 500;
			font-size: 0.92rem;
			line-height: 140%;
			color: #34bf6c;
			margin: 0;
		}

		.link {
			font-weight: 500;
			font-size: 0.85rem;
			margin: 0;
			line-height: 140%;
			color: #fff;
			transition: color 0.3s;

			&:hover {
				color: #57a576;
			}
		}
	}

	.description {
		font-weight: 500;
		font-size: 0.9rem;
		line-height: 140%;
		color: #f4f4f4;
		margin: 0;
		padding-top: 1rem;
	}

	a {
		color: white;
		text-decoration: underline;
	}
}
</style>
