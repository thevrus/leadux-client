<template>
	<footer>
		<div class="container">
			<router-link to="#!" class="logo">Leadux</router-link>

			<div class="content">
				<p>
					Сайт защищен авторским правом. Любое копирование и распространение
					материалов карается законом
				</p>

				<ul class="links">
					<li>
						<router-link to="#!">FAQ</router-link>
					</li>
					<li>
						<router-link to="#!">Условия использования</router-link>
					</li>
					<li>
						<router-link to="#!">Обратная связь</router-link>
					</li>
				</ul>
			</div>

			<hr />
			<p class="copyright">© Leadux, 2020</p>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	background-color: #2c2c2c;
	padding-top: 2rem;
	padding-bottom: 2rem;
	margin-top: 8rem;

	.logo {
		font-size: 28px;
		font-style: normal;
		font-weight: 700;
		color: #fff;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.8;
		}
	}

	.content {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
		margin-bottom: 3rem;

		p {
			max-width: 400px;
			font-size: 14px;
			line-height: 155%;
			color: #535353;
		}

		.links {
			li {
				display: inline;

				a {
					color: #818181;
					font-weight: 500;
					font-size: 14px;
					margin-left: 2rem;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}

	hr {
		border: 0.5px solid #393939;
	}

	.copyright {
		font-size: 14px;
		line-height: 140%;
		color: #6f6f6f;
		padding-top: 2rem;
	}
}
</style>
