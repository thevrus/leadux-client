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
		font-size: 2.25rem;
		line-height: 120%;
		color: #ffffff;
		margin-top: 0px;
	}

	p {
		font-weight: 100;
		font-size: 1rem;
		line-height: 155%;
		color: #ffffff;
		text-align: left;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 4%;
		text-align: center;
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
</style>
