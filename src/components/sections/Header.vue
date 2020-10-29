<template>
	<header>
		<Nav />
		<div class="container">
			<div class="header">
				<div class="col-l">
					<h1>Единственный курс по UX/UI дизайну, который тебе нужен</h1>
					<p class="desc">
						Твой путь в веб-дизайне и дизайне мобильных приложений для iOS и
						Android начинается здесь
					</p>
					<div class="btn-wrapp">
						<a href="#" class="cta">Купить</a>
						<router-link to="/watch" class="watch"
							>Попробовать бесплатно</router-link
						>
					</div>
				</div>
				<div class="col-r">
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
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import Nav from '@/components/sections/Nav'
export default {
	name: 'Header',
	components: {
		Nav,
	},
}
</script>

<style lang="postcss" scoped>
header {
	height: 100%;
	width: 100%;
	overflow: hidden;
	z-index: 2;
	background: radial-gradient(
			37.95% 72.83% at 61.41% 41.35%,
			rgba(233, 55, 179, 0.3) 0%,
			rgba(233, 55, 179, 0) 73.56%
		),
		radial-gradient(
			32.2% 61.79% at 100% 0%,
			rgba(55, 94, 233, 0.6) 0%,
			rgba(55, 94, 233, 0) 100%
		),
		#000000;
}
.header {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 3%;
	padding: 9rem 0 9.8rem;
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
		transition: transform 0.3s;

		&:hover {
			transform: translateY(-2px);
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
	.col-r {
	}
	.col-r {
		.figma {
			position: absolute;
			left: 14px;
			top: -64px;
			height: 658px;
			z-index: 0;
		}
		.elem {
			position: absolute;
			left: 173px;
			top: -34px;
			height: 619px;
			z-index: 0;
		}

		.box {
			position: relative;

			&::after {
				content: '';
				display: block;
				background: linear-gradient(
					180deg,
					rgba(0, 0, 0, 0) 68.66%,
					#000000 96.58%
				);
				z-index: 4;
				height: 658px;
				width: 135%;
				position: absolute;
				top: -106px;
				left: 14px;
			}
		}
	}
}
</style>
