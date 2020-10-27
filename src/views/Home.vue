<template>
	<div>
		<header>
			<div class="container">
				<Nav />
				<div class="header">
					<div class="col-l">
						<h1>Единственный курс по UX/UI дизайну, который тебе нужен</h1>
						<p class="desc">
							Твой путь в веб-дизайне и дизайне мобильных приложений для iOS и
							Android начинается здесь
						</p>
						<div class="btn-wrapp">
							<a href="#" class="buy-btn">Купить</a>
							<router-link to="/watch" class="watch"
								>Попробовать бесплатно</router-link
							>
						</div>
					</div>
					<div class="col-r">
						<div class="box">
							<img
								src="../assets/img/header_figma.svg"
								alt="Интерфейс Фигма"
								class="figma"
							/>

							<img
								src="../assets/img/header_elem.png"
								alt="Интерфейс Фигма"
								class="elem"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>

		<section id="skills">
			<div class="container">
				<h3>Кому подойдет этот курс:</h3>

				<div class="wrapp">
					<div class="junior">
						<h5>
							Новичкам
							<img
								src="../assets/img/skills_junior.png"
								alt="Иконка человека"
							/>
						</h5>
						<p>
							Вы с нуля освоите навыки работы в Figma и сможете начать карьеру
							веб-дизайнера или стать UI/UX специалистом
						</p>
					</div>
					<div class="middle">
						<h5>
							Продвинутым
							<img
								src="../assets/img/skills_middle.png"
								alt="Иконка человека"
							/>
						</h5>
						<p>
							Вы уже знакомы с Photoshop, Sketch app, Adobe XD и прочими
							программами, но хотите изучить лучшую из всех — Figma
						</p>
					</div>
					<div class="senior">
						<h5>
							Профессионалам
							<img
								src="../assets/img/skills_senior.png"
								alt="Иконка человека"
							/>
						</h5>
						<p>
							Вы профи в полиграфии, обработке фото или любой другой области, и
							хотите освоить новые горизоны
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="questions">
			<div class="container grid-x2fr">
				<div class="col-l">
					<span>Ответы получат все</span>
					<h3>
						Задвайте вопросы — получайте ответы
					</h3>
					<p>
						Смотрите урок и у вас возникли вопросы? Задайте их не отрываясь от
						просмотра и получите быстрый ответ от автора курса
					</p>

					<a href="#" class="buy-btn">Купить курс Figma</a>
				</div>
				<div class="col-r">
					<img src="../assets/img/questions_img.png" alt="Вопросы и ответы" />
				</div>
			</div>
		</section>
		<section id="exercises">
			<div class="container grid-x2fr">
				<div class="col-l">
					<img src="../assets/img/exercises_img.png" alt="Вопросы и ответы" />
				</div>
				<div class="col-r">
					<span>Ответы получат все</span>
					<h3>
						Задвайте вопросы — получайте ответы
					</h3>
					<p>
						Смотрите урок и у вас возникли вопросы? Задайте их не отрываясь от
						просмотра и получите быстрый ответ от автора курса
					</p>

					<a href="#" class="buy-btn">Купить курс Figma</a>
				</div>
			</div>
		</section>
		<section id="materials">
			<div class="container grid-x2fr">
				<div class="col-l">
					<span>Ответы получат все</span>
					<h3>
						Задвайте вопросы — получайте ответы
					</h3>
					<p>
						Смотрите урок и у вас возникли вопросы? Задайте их не отрываясь от
						просмотра и получите быстрый ответ от автора курса
					</p>

					<a href="#" class="buy-btn">Купить курс Figma</a>
				</div>
				<div class="col-r">
					<img src="../assets/img/materials_img.png" alt="Вопросы и ответы" />
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
	name: 'Home',
	components: {
		Nav,
	},
}
</script>

<style lang="postcss" scoped>
.buy-btn {
	padding: 1.1rem 2.6rem;
	background-color: #e937b3;
	border-radius: 10px;
	margin-right: 1rem;
	font-size: 0.95rem;
	display: inline-block;
	transition: transform 0.3s;

	&:hover {
		transform: translateY(-2px);
		text-decoration: none;
	}
}

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
			top: 1.2rem;
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
				width: 106%;
				position: absolute;
				top: -106px;
				left: 14px;
			}
		}
	}
}

#skills {
	background-color: #000;
	padding-top: 8rem;
	h3 {
		font-weight: bold;
		font-size: 2.25rem;
		line-height: 120%;
		color: #ffffff;
		margin-top: 0px;
	}

	p {
		font-weight: normal;
		font-size: 1rem;
		line-height: 155%;
		color: #ffffff;
		text-align: left;
	}

	.wrapp {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 4%;
		text-align: center;
	}

	h5 {
		font-weight: bold;
		font-size: responsive 1rem 1.37rem;
		line-height: 140%;
		color: rgba(255, 255, 255, 0.9);
		padding: 1.75rem 0;
		border-radius: 18px;
	}

	.junior {
		h5 {
			background: linear-gradient(180deg, #4590d4 0%, #76aee1 100%);
			position: relative;
			img {
				position: absolute;
				left: 8px;
				bottom: 0;
				width: 88px;
			}
		}
	}
	.middle {
		h5 {
			position: relative;
			background: linear-gradient(180deg, #e14d4d 0%, #e77575 100%);
			img {
				position: absolute;
				left: 8px;
				bottom: 0;
				width: 88px;
			}
		}
	}

	.senior {
		h5 {
			position: relative;
			background: linear-gradient(180deg, #864ee1 0%, #a492ec 100%);
			img {
				position: absolute;
				left: 8px;
				bottom: 0;
				width: 88px;
			}
		}
	}
}

#questions {
	background: radial-gradient(
			22.64% 50.59% at 75.59% 50%,
			rgba(40, 152, 255, 0.5) 0%,
			rgba(40, 152, 255, 0) 100%
		),
		#000000;

	padding: 3.25rem 0;
	margin: 3.25rem 0;

	.col-l {
		margin-left: 3rem;
	}

	.col-r {
		justify-self: end;
	}

	span {
		padding: 0.4rem 1rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		margin-top: 2rem;
		margin-bottom: 2rem;
		color: #f5f5f5;
	}

	h3 {
		max-width: 454px;
		font-weight: bold;
		font-size: responsive 1.5rem 2.25rem;
		line-height: 130%;
		color: #f4f4f4;
		margin-bottom: 1.5rem;
	}

	p {
		font-style: normal;
		font-weight: 500;
		font-size: responsive 0.8rem 1rem;
		line-height: 150%;
		color: #f2f2f2;
		max-width: 448px;
		margin-bottom: 2.25rem;
	}

	img {
		width: 100%;
		max-width: 625px;
	}
}

#exercises {
	background: radial-gradient(
			24.03% 53.7% at 25.97% 50%,
			rgba(115, 59, 234, 0.5) 0%,
			rgba(115, 59, 234, 0) 100%
		),
		#000000;
	padding: 3.25rem 0;
	margin: 3.25rem 0;

	.col-r {
		justify-self: end;
	}

	span {
		padding: 0.4rem 1rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		margin-top: 2rem;
		margin-bottom: 2rem;
		color: #f5f5f5;
	}

	h3 {
		max-width: 454px;
		font-weight: bold;
		font-size: responsive 1.5rem 2.25rem;
		line-height: 130%;
		color: #f4f4f4;
		margin-bottom: 1.5rem;
	}

	p {
		font-style: normal;
		font-weight: 500;
		font-size: responsive 0.8rem 1rem;
		line-height: 150%;
		color: #f2f2f2;
		max-width: 448px;
		margin-bottom: 2.25rem;
	}

	img {
		width: 100%;
		max-width: 618px;
	}
}

#materials {
	background: radial-gradient(
			22.64% 50.59% at 75.59% 50%,
			rgba(18, 165, 95, 0.5) 0%,
			rgba(18, 165, 95, 0) 100%
		),
		#000000;

	padding: 3.25rem 0;
	margin: 3.25rem 0;

	.col-l {
		margin-left: 3rem;
	}

	.col-r {
		justify-self: end;
	}

	span {
		padding: 0.4rem 1rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		margin-top: 2rem;
		margin-bottom: 2rem;
		color: #f5f5f5;
	}

	h3 {
		max-width: 454px;
		font-weight: bold;
		font-size: responsive 1.5rem 2.25rem;
		line-height: 130%;
		color: #f4f4f4;
		margin-bottom: 1.5rem;
	}

	p {
		font-style: normal;
		font-weight: 500;
		font-size: responsive 0.8rem 1rem;
		line-height: 150%;
		color: #f2f2f2;
		max-width: 448px;
		margin-bottom: 2.25rem;
	}

	img {
		width: 100%;
		max-width: 623px;
	}
}

.questions-bg {
	background: radial-gradient(
			22.64% 50.59% at 75.59% 50%,
			rgba(40, 152, 255, 0.5) 0%,
			rgba(40, 152, 255, 0) 100%
		),
		#000000;
}
.exercises-bg {
	background: radial-gradient(
			24.03% 53.7% at 25.97% 50%,
			rgba(115, 59, 234, 0.5) 0%,
			rgba(115, 59, 234, 0) 100%
		),
		#000000;
}
.materials-bg {
	background: radial-gradient(
			22.64% 50.59% at 75.59% 50%,
			rgba(18, 165, 95, 0.5) 0%,
			rgba(18, 165, 95, 0) 100%
		),
		#000000;
}

.grid-x2fr {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 2rem;
	align-items: center;
	justify-content: space-between;
}
</style>
