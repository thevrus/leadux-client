<template functional>
	<footer class="container">
		<router-link to="/" class="logo">
			<img src="@/assets/img/logo_mono.svg" alt="Leadux" />
		</router-link>

		<div class="content">
			<p>
				Сайт защищен авторским правом. Любое копирование и распространение
				материалов карается законом
			</p>

			<div class="col">
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

				<span class="logos">
					<img
						src="@/assets/img/visa.svg"
						alt="Логотип Visa"
						title="Защищенные платежи"
					/>
					<img
						src="@/assets/img/mc.svg"
						alt="Логотип MasterCard"
						title="Защищенные платежи"
					/>
				</span>
			</div>
		</div>

		<p class="copyright">© Leadux, 2020</p>
	</footer>
</template>

<style lang="postcss" scoped>
footer {
	color: #fff;
	padding-top: 1rem;
	padding-bottom: 1rem;
	margin-top: 8rem;
}

.logo {
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

	@media (max-width: 667px) {
		display: block;
	}

	p {
		max-width: 400px;
		font-size: 0.9rem;
		letter-spacing: 0.6px;
		font-weight: 100;
		line-height: 155%;
	}

	.col {
		text-align: right;

		@media (max-width: 667px) {
			text-align: left;
		}

		.links {
			padding: 0;
			margin-bottom: 2.5rem;

			li {
				display: inline;

				@media (max-width: 990px) {
					display: block;
					margin-bottom: 1rem;
				}

				@media (max-width: 667px) {
					&:first-child {
						margin-top: 3rem;
					}
				}

				a {
					font-size: 0.9rem;
					margin-left: 2rem;
					font-weight: 100;

					@media (max-width: 685px) {
						margin: 0;
					}
				}
			}
		}

		.logos {
			img:not(:last-child) {
				margin-right: 1.5rem;
			}
		}
	}
}

.copyright {
	font-size: 0.9rem;
	font-weight: 100;
	text-align: center;
	padding-top: 2rem;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background: linear-gradient(90deg, #66c8ff 0%, #9e66ff 100%);
		top: 0;
		left: 0;
	}
}
</style>
