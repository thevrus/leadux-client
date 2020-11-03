<template>
	<header>
		<Nav />
		<div class="container">
			<div class="header">
				<span class="col-l">
					<h1>Единственный курс по UX/UI дизайну, который тебе нужен</h1>
					<p class="desc">
						Твой путь в веб-дизайне и дизайне мобильных приложений для iOS и
						Android начинается здесь
					</p>
					<div class="btn-wrapp">
						<a href="#price" class="cta">Купить</a>
						<router-link to="/watch" class="watch">
							{{ loggedIn ? 'Смотреть' : 'Попробовать бесплатно' }}
						</router-link>
					</div>
				</span>
				<span class="col-r">
					<div class="box">
						<img
							src="@/assets/img/header_figma.svg"
							alt="Интерфейс Фигма"
							class="figma"
						/>

						<img
							src="@/assets/img/header_elem.png"
							alt="Интерфейс Фигма"
							class="elem"
						/>
					</div>
				</span>
			</div>
		</div>
	</header>
</template>

<script>
import Nav from '@/components/sections/Nav'
import { mapGetters } from 'vuex'

export default {
	name: 'Header',
	components: {
		Nav,
	},
	computed: {
		...mapGetters('auth', ['loggedIn']),
	},
}
</script>

<style lang="postcss" scoped>
header {
	height: 100%;
	width: 100%;
	overflow: hidden;
	z-index: 2;
	/* background: radial-gradient(
			37.95% 72.83% at 61.41% 41.35%,
			rgba(233, 55, 179, 0.3) 0%,
			rgba(233, 55, 179, 0) 73.56%
		),
		radial-gradient(
			32.2% 61.79% at 100% 0%,
			rgba(55, 94, 233, 0.6) 0%,
			rgba(55, 94, 233, 0) 100%
		),
		#000000; */

	background: radial-gradient(
		48.2% 35.86% at 100% 0%,
		rgba(0, 87, 217, 0.6) 0%,
		rgba(0, 102, 255, 0) 100%
	);
}

.header {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 3%;
	padding: 9rem 0 9.8rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: 600px 1fr;
		padding-bottom: 3.8rem;
	}
	h1 {
		max-width: 580px;
		width: 100%;
		font-weight: bold;
		font-size: responsive 2rem 3rem;
		line-height: 110%;
		color: #ffffff;
		margin-bottom: 2.5rem;
	}

	.desc {
		font-weight: 500;
		font-size: 1.12rem;
		line-height: 155%;
		color: #e6e6e6;
		max-width: 520px;
		margin: 0 0 3.25rem;
	}

	.watch {
		padding: 1.1rem 1.75rem 1.1rem 2.85rem;
		border: 1px solid rgba(255, 255, 255, 0.11);
		border-radius: 10px;
		font-size: 0.95rem;
		position: relative;
		display: inline-block;
		transition: border-color 0.3s;

		@media (max-width: 946px) {
			margin-top: 1rem;
		}

		&:hover {
			border-color: #fff;
			text-decoration: none;
		}

		&:before {
			content: '';
			width: 10px;
			height: 12px;
			background-size: cover;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 1.75rem;
			background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNjE3IDIuNTZDOC44NTQgNC4xIDkuOTcyIDQuODcgMTAgNS45NDh2LjEwNkM5Ljk3MiA3LjEzIDguODU0IDcuOSA2LjYxNyA5LjQ0Yy0yLjg2MiAxLjk3Mi00LjI5MyAyLjk1Ny01LjQxOCAyLjQxMmEyLjIzMyAyLjIzMyAwIDAxLS4xMDctLjA1NUMwIDExLjE4OCAwIDkuNDU5IDAgNlMwIC44MTIgMS4wOTIuMjA0Yy4wMzUtLjAyLjA3LS4wMzguMTA3LS4wNTUgMS4xMjUtLjU0NSAyLjU1Ni40NCA1LjQxOCAyLjQxMnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=');
		}
	}
	.col-l {
		@media (max-width: 768px) {
			order: 2;
		}
	}
	.col-r {
		@media (max-width: 768px) {
			order: 1;
		}
		.figma {
			position: absolute;
			left: 14px;
			top: -64px;
			height: 658px;
			z-index: 0;
			animation: fadeIn 1.2s ease-in-out 1;
			@media (max-width: 768px) {
				left: 54px;
				top: -106px;
			}
		}

		.elem {
			position: absolute;
			left: 173px;
			top: -34px;
			height: 619px;
			z-index: 0;
			animation: fadeIn 3s ease-in-out 1;

			@media (max-width: 768px) {
				left: 203px;
				top: -79px;
			}
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
			}

			to {
				opacity: 1;
			}
		}

		.box {
			position: relative;

			&::after {
				content: '';
				display: block;
				background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000000 100%);
				z-index: 4;
				height: 658px;
				width: 135%;
				position: absolute;
				top: -64px;
				left: 14px;
			}
		}
	}
}
</style>
