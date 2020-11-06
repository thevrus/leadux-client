<template functional>
	<section id="skills" class="container">
		<h3>Кому подойдет этот курс:</h3>

		<div class="grid">
			<span class="junior">
				<h5>
					Новичкам
					<img src="@/assets/img/skills_junior.png" alt="Иконка человека" />
				</h5>
				<p>
					Вы с нуля освоите навыки работы в Figma и сможете начать карьеру
					веб-дизайнера или стать UI/UX специалистом
				</p>
			</span>

			<span class="middle">
				<h5>
					Продвинутым
					<img src="@/assets/img/skills_middle.png" alt="Иконка человека" />
				</h5>
				<p>
					Вы уже знакомы с Photoshop, Sketch app, Adobe XD и прочими
					программами, но хотите изучить лучшую из всех — Figma
				</p>
			</span>

			<span class="senior">
				<h5>
					Профессионалам
					<img src="@/assets/img/skills_senior.png" alt="Иконка человека" />
				</h5>
				<p>
					Вы профи в полиграфии, обработке фото или любой другой области, и
					хотите освоить новые горизоны
				</p>
			</span>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
.container {
	padding-top: 8rem;
	margin-bottom: var(--section-margin);

	h3 {
		font-weight: bold;
		font-size: responsive 1.5rem 2.25rem;
		margin-bottom: 2.5rem;
		line-height: 120%;
		color: #fff;
		margin-top: 0;
	}

	p {
		font-weight: 100;
		font-size: 1rem;
		line-height: 155%;
		color: #fff;
		text-align: left;
	}

	.grid {
		display: grid;
		grid-gap: 4%;
		grid-template-areas: 'junior junior middle middle senior senior';
		text-align: center;

		@media (max-width: 1196px) {
			grid-template-areas:
				'junior junior middle middle'
				'senior senior senior senior';
			align-items: center;
			justify-content: center;
		}

		@media (max-width: 786px) {
			grid-template-areas:
				'junior junior junior junior'
				'middle middle middle middle'
				'senior senior senior senior';
			margin-bottom: 6rem;
		}
	}

	h5 {
		font-weight: normal;
		font-size: responsive 1rem 1.15rem;
		line-height: 140%;
		color: rgba(255, 255, 255, 0.9);
		padding: 1.75rem 0;
		border-radius: 18px;
	}

	.junior {
		max-width: 380px;
		grid-area: junior;
		margin: 0 auto;

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
		max-width: 380px;
		grid-area: middle;
		margin: 0 auto;

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
		max-width: 380px;
		grid-area: senior;
		margin: 0 auto;

		@media (max-width: 1196px) and (min-width: 786px) {
			grid-column-start: 2;
			grid-column-end: 4;
		}

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
</style>
