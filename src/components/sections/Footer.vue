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

			<ul class="links">
				<li>
					<router-link to="/privacy">
						Политика конфиденциальности
					</router-link>
				</li>
				<li>
					<router-link to="/terms">
						Условия использования
					</router-link>
				</li>
			</ul>
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

	p {
		max-width: 400px;
		font-size: 0.9rem;
		letter-spacing: 0.6px;
		font-weight: 100;
		line-height: 155%;
	}

	.links {
		li {
			display: inline;

			a {
				font-size: 14px;
				margin-left: 2rem;

				&:hover {
					text-decoration: underline;
				}
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
		top: 0px;
		left: 0;
	}
}
</style>
