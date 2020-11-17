<template functional>
	<footer>
		<div class="container">
			<router-link to="/" class="logo">
				<img src="@/assets/img/logo_white.svg" alt="Leadux" />
			</router-link>

			<div class="content">
				<p>
					Сайт защищен авторским правом. Любое копирование и распространение
					материалов карается законом
				</p>

				<ul class="links">
					<li>
						<router-link to="/privacy">
							Политика конфиденциальности
						</router-link>
					</li>
					<li>
						<router-link to="/pay-rules"> Условия оплаты </router-link>
					</li>
				</ul>
			</div>

			<hr />
			<p class="copyright">© Leadux, 2020</p>
		</div>
	</footer>
</template>

<style lang="postcss" scoped>
footer {
	background-color: var(--panel-bg);
	padding-top: 1.6rem;
	padding-bottom: 1.6rem;
	margin-top: 8rem;

	.container {
		max-width: 1580px;
	}

	.logo {
		font-size: 28px;
		font-weight: 700;
		text-decoration: none;
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
			color: #8c8c8c;
		}

		.links {
			li {
				display: inline;

				a {
					color: #8c8c8c;
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
		text-align: center;
		font-size: 14px;
		color: #6f6f6f;
		padding-top: 2rem;
	}
}
</style>
