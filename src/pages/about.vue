<template>
	<div class="container">
		<Nav />
		<div class="about">
			<div class="main-info">
				<h2 class="title">O Leadux</h2>
				<p class="desc">
					Leadux — это площадка для развития профессиональных навыков в сфере
					IT, которая предоставляет доступ к структурированному материалу в
					формате видеоуроков, заданий и полезных ресурсов. Мы уделяем особое
					внимание качеству и доступности контента, предлагаем интересные
					домашние задания в игровой форме и огромное количество полезных
					ссылок, отобранных профессионалами за многие годы работы. Специалисты
					Leadux оказывают помощь студентам на всех этапах обучения и после
					него, дают профессиональные советы и помогают с трудоустройством.
				</p>
			</div>
			<div class="author">
				<div class="col-l">
					<picture>
						<source
							class="person"
							srcset="@/assets/img/author1.5x.webp"
							type="image/svg"
						/>
						<img
							src="@/assets/img/author1.5x.png"
							alt="Фото Игорь Т."
							class="person"
						/>
					</picture>
				</div>
				<div class="col-r">
					<span class="status">Автор курса Figma</span>
					<span class="name">Igor T.</span>
					<p class="desc">
						Игорь является экспертом в области UI/UX с 12-ти летним опытом
						работы. Featured Deigner на Behance и Upwork. Есть работы в
						курируемых галереях Adobe. С недавнего времени ведет канал на
						Youtube, посвященный фотошопу.
					</p>
					<ul class="list">
						<li class="item">
							<a
								href="https://www.behance.net/kenezibo"
								class="link behance"
								target="_blank"
								rel="noopener noreferrer"
								>Behance</a
							>
						</li>
						<li class="item">
							<a
								href="https://www.youtube.com/channel/UC2UB7pz_KZbnR2GrwBPAARg"
								class="link youtube"
								target="_blank"
								rel="noopener noreferrer"
								>Youtube</a
							>
						</li>
						<li class="item">
							<a
								href="https://www.upwork.com/o/profiles/users/~0153d33098d92e08e6/"
								class="link upwork"
								target="_blank"
								rel="noopener noreferrer"
								>Upwork</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer.vue'
export default {
	components: {
		Nav,
		Footer,
	},
}
</script>

<style lang="postcss" scoped>
.about {
	.main-info {
		.title {
			font-weight: bold;
			font-size: responsive 1.75rem 2.75rem;
			line-height: 140%;
			text-align: center;
			color: #ffffff;
			margin-top: 5rem;
			margin-bottom: 3rem;
		}
		.desc {
			font-weight: normal;
			font-size: 1.02rem;
			line-height: 149%;
			color: #bebebe;
			max-width: 830px;
			width: 100%;
			margin: 0 auto 8rem;
		}
	}

	.author {
		width: 100%;
		max-width: 1008px;
		background-color: #1a1a1a;
		border-radius: 13px;
		margin: 0 auto;
		padding: 1.8rem 0 2rem;
		display: grid;
		grid-template-columns: 355px 1fr;

		@media (max-width: 825px) {
			grid-template-columns: 280px 1fr;
		}

		@media (max-width: 695px) {
			display: block;
			margin-top: 350px;
		}

		.col-l {
			position: relative;
			@media (max-width: 695px) {
				&:after {
					content: '';
					background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000 100%);
					width: 100%;
					height: 250px;
					position: absolute;
					bottom: 27px;
					left: 0;
					z-index: -1;
				}
			}
			.person {
				width: 100%;
				max-width: 255px;
				position: absolute;
				bottom: -2rem;
				left: 50%;
				transform: translateX(-50%);
				filter: grayscale(100%);
				transition: filter 0.3s linear;
				z-index: 1;

				@media (min-width: 768px) {
					&:hover {
						filter: grayscale(0%);
					}
				}
				@media (max-width: 768px) {
					filter: grayscale(0%);
				}
				@media (max-width: 695px) {
					z-index: -1;
					bottom: -5rem;
				}
			}
		}
		.col-r {
			padding-right: 1rem;
			position: relative;

			&:after {
				content: '';
				width: 30px;
				height: 40px;
				background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzMCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgNDBWMEgyOS4zOTc2VjQwTDE0LjkzOTggMzEuMzI1M0wwIDQwWiIgZmlsbD0iIzBGOENGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjcwODMgMTMuMTI1QzEzLjcwODMgMTMuOTQ2MyAxMy4zOTk0IDE0LjY5NjIgMTIuODkxNiAxNS4yNjM2QzEzLjYwNDQgMTUuNzcwNiAxNC4xMzc2IDE2LjQ5MSAxNC40MTQxIDE3LjMyMDlDMTQuNjkwNiAxOC4xNTA4IDE0LjY5NjIgMTkuMDQ3IDE0LjQzIDE5Ljg4MDNDMTQuMTYzOSAyMC43MTM1IDEzLjYzOTcgMjEuNDQwNSAxMi45MzMzIDIxLjk1NjRDMTIuMjI2OCAyMi40NzIyIDExLjM3NDcgMjIuNzUwMSAxMC41IDIyLjc1SDYuMzc1QzYuMDEwMzMgMjIuNzUgNS42NjA1OSAyMi42MDUxIDUuNDAyNzMgMjIuMzQ3M0M1LjE0NDg3IDIyLjA4OTQgNSAyMS43Mzk3IDUgMjEuMzc1VjEwLjM3NUM1IDEwLjAxMDMgNS4xNDQ4NyA5LjY2MDU5IDUuNDAyNzMgOS40MDI3M0M1LjY2MDU5IDkuMTQ0ODcgNi4wMTAzMyA5IDYuMzc1IDlIMTAuMDQxN0MxMS4wMTQxIDkgMTEuOTQ2OCA5LjM4NjMxIDEyLjYzNDQgMTAuMDczOUMxMy4zMjIgMTAuNzYxNiAxMy43MDgzIDExLjY5NDIgMTMuNzA4MyAxMi42NjY3VjEzLjEyNVpNNi44MzMzMyAxNC41VjEwLjgzMzNIMTAuMDQxN0MxMC41Mjc5IDEwLjgzMzMgMTAuOTk0MiAxMS4wMjY1IDExLjMzOCAxMS4zNzAzQzExLjY4MTggMTEuNzE0MSAxMS44NzUgMTIuMTgwNCAxMS44NzUgMTIuNjY2N1YxMy4xMjVDMTEuODc1IDEzLjQ4OTcgMTEuNzMwMSAxMy44Mzk0IDExLjQ3MjMgMTQuMDk3M0MxMS4yMTQ0IDE0LjM1NTEgMTAuODY0NyAxNC41IDEwLjUgMTQuNUg2LjgzMzMzWk02LjgzMzMzIDE2LjMzMzNIMTAuNUMxMS4xMDc4IDE2LjMzMzMgMTEuNjkwNyAxNi41NzQ4IDEyLjEyMDUgMTcuMDA0NUMxMi41NTAyIDE3LjQzNDMgMTIuNzkxNyAxOC4wMTcyIDEyLjc5MTcgMTguNjI1QzEyLjc5MTcgMTkuMjMyOCAxMi41NTAyIDE5LjgxNTcgMTIuMTIwNSAyMC4yNDU1QzExLjY5MDcgMjAuNjc1MiAxMS4xMDc4IDIwLjkxNjcgMTAuNSAyMC45MTY3SDYuODMzMzNWMTYuMzMzM1pNMTYuOTE2NyAxMC44MzMzQzE2LjkxNjcgMTAuNTkwMSAxNy4wMTMyIDEwLjM1NyAxNy4xODUyIDEwLjE4NTFDMTcuMzU3MSAxMC4wMTMyIDE3LjU5MDIgOS45MTY1OSAxNy44MzMzIDkuOTE2NTlIMjEuMDQxN0MyMS4yODQ4IDkuOTE2NTkgMjEuNTE3OSAxMC4wMTMyIDIxLjY4OTggMTAuMTg1MUMyMS44NjE4IDEwLjM1NyAyMS45NTgzIDEwLjU5MDEgMjEuOTU4MyAxMC44MzMzQzIxLjk1ODMgMTEuMDc2NCAyMS44NjE4IDExLjMwOTUgMjEuNjg5OCAxMS40ODE0QzIxLjUxNzkgMTEuNjUzMyAyMS4yODQ4IDExLjc0OTkgMjEuMDQxNyAxMS43NDk5SDE3LjgzMzNDMTcuNTkwMiAxMS43NDk5IDE3LjM1NzEgMTEuNjUzMyAxNy4xODUyIDExLjQ4MTRDMTcuMDEzMiAxMS4zMDk1IDE2LjkxNjcgMTEuMDc2NCAxNi45MTY3IDEwLjgzMzNaTTE0LjYyNSAxNy4yNDk5QzE0LjYyNSAxNC42NjY4IDE2LjgzMzMgMTIuNjY2NiAxOS40Mzc1IDEyLjY2NjZDMjIuMDQxNyAxMi42NjY2IDI0LjI1IDE0LjY2NjggMjQuMjUgMTcuMjQ5OUMyNC4yNSAxNy40OTMgMjQuMTUzNCAxNy43MjYyIDIzLjk4MTUgMTcuODk4MUMyMy44MDk2IDE4LjA3IDIzLjU3NjQgMTguMTY2NiAyMy4zMzMzIDE4LjE2NjZIMTYuNDU4M0MxNi40NTgzIDE5LjYzMzMgMTcuNzM4OSAyMC45MTY2IDE5LjQzNzUgMjAuOTE2NkMyMC40NTQxIDIwLjkxNjYgMjEuMTE4NyAyMC42Mjg4IDIxLjUxMzggMjAuMzc0OEMyMS43MDgyIDIwLjI1NjMgMjEuODgxNiAyMC4xMDY0IDIyLjAyNzEgMTkuOTMxMkMyMi4xNjcyIDE5LjczNTggMjIuMzc4MyAxOS42MDM0IDIyLjYxNTIgMTkuNTYyMkMyMi44NTIgMTkuNTIxMSAyMy4wOTU1IDE5LjU3NDYgMjMuMjkzMiAxOS43MTEzQzIzLjQ5MDkgMTkuODQ4IDIzLjYyNzEgMjAuMDU2OCAyMy42NzIzIDIwLjI5MjlDMjMuNzE3NSAyMC41MjkgMjMuNjY4MiAyMC43NzM0IDIzLjUzNSAyMC45NzM0QzIzLjIyODggMjEuMzM4MyAyMi45MTA3IDIxLjY1NTQgMjIuNTA1NiAyMS45MTU4QzIxLjgzMTggMjIuMzUwMyAyMC44MjYzIDIyLjc0OTkgMTkuNDM3NSAyMi43NDk5QzE2LjgzMzMgMjIuNzQ5OSAxNC42MjUgMjAuNzQ5OCAxNC42MjUgMTguMTY2NlYxNy4yNDk5Wk0xOS40Mzc1IDE0LjQ5OTlDMjAuNzY3NiAxNC40OTk5IDIxLjg0MTkgMTUuMjg3MyAyMi4yNDUzIDE2LjMzMzNIMTYuNjI5OEMxNy4wMzMxIDE1LjI4NzMgMTguMTA3NCAxNC40OTk5IDE5LjQzNzUgMTQuNDk5OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=');
				background-size: cover;
				position: absolute;
				top: -29px;
				right: 10%;
			}
			@media (max-width: 695px) {
				padding-left: 1rem;
			}
			.status {
				padding: 10px 22px;
				background-color: #222222;
				border-radius: 7px;
				font-weight: 500;
				font-size: 14px;
				line-height: 140%;
				color: #616161;
				margin-bottom: 1.4rem;
				display: inline-block;
			}

			.name {
				display: block;
				font-weight: bold;
				font-size: 1.5rem;
				line-height: 140%;
				color: #ffffff;
				margin-bottom: 1rem;
			}

			.desc {
				font-size: 1rem;
				line-height: 149%;
				color: #aeaeae;
				max-width: 576px;
				margin-bottom: 1.5rem;
			}

			.list {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			.item {
				display: inline-block;

				&:not(:last-child) {
					margin-right: 2.5rem;
				}

				@media (max-width: 695px) {
					display: block;
					&:not(:last-child) {
						margin-bottom: 1rem;
					}

					@media (max-width: 825px) {
						margin-right: 1rem;
					}
				}
			}

			.link {
				font-weight: 500;
				display: inline-block;
				font-size: 1rem;
				line-height: 149%;
				color: #5b5b5b;
				cursor: pointer;
				position: relative;
				padding-left: 2rem;
			}

			.behance {
				&:before {
					content: '';
					width: 19px;
					height: 14px;
					background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjcwODMzIDQuNzkxNzVDOC43MDgzMyA1LjYxMzA4IDguMzk5NDIgNi4zNjI5MiA3Ljg5MTU4IDYuOTMwMzNDOC42MDQzOCA3LjQzNzMzIDkuMTM3NTYgOC4xNTc3OSA5LjQxNDA5IDguOTg3NjVDOS42OTA2MyA5LjgxNzUgOS42OTYyMSAxMC43MTM4IDkuNDMwMDMgMTEuNTQ3QzkuMTYzODUgMTIuMzgwMiA4LjYzOTY5IDEzLjEwNzMgNy45MzMyNiAxMy42MjMxQzcuMjI2ODMgMTQuMTM5IDYuMzc0NzIgMTQuNDE2OSA1LjUgMTQuNDE2N0gxLjM3NUMxLjAxMDMzIDE0LjQxNjcgMC42NjA1OTEgMTQuMjcxOSAwLjQwMjcyOCAxNC4wMTRDMC4xNDQ4NjYgMTMuNzU2MiAwIDEzLjQwNjQgMCAxMy4wNDE3VjIuMDQxNzVDMCAxLjY3NzA4IDAuMTQ0ODY2IDEuMzI3MzQgMC40MDI3MjggMS4wNjk0OEMwLjY2MDU5MSAwLjgxMTYxNCAxLjAxMDMzIDAuNjY2NzQ4IDEuMzc1IDAuNjY2NzQ4SDUuMDQxNjdDNi4wMTQxMyAwLjY2Njc0OCA2Ljk0Njc2IDEuMDUzMDYgNy42MzQzOSAxLjc0MDY5QzguMzIyMDMgMi40MjgzMiA4LjcwODMzIDMuMzYwOTUgOC43MDgzMyA0LjMzMzQxVjQuNzkxNzVaTTEuODMzMzMgNi4xNjY3NVYyLjUwMDA4SDUuMDQxNjdDNS41Mjc5IDIuNTAwMDggNS45OTQyMSAyLjY5MzI0IDYuMzM4MDMgMy4wMzcwNUM2LjY4MTg1IDMuMzgwODcgNi44NzUgMy44NDcxOCA2Ljg3NSA0LjMzMzQxVjQuNzkxNzVDNi44NzUgNS4xNTY0MiA2LjczMDEzIDUuNTA2MTYgNi40NzIyNyA1Ljc2NDAyQzYuMjE0NDEgNi4wMjE4OCA1Ljg2NDY3IDYuMTY2NzUgNS41IDYuMTY2NzVIMS44MzMzM1pNMS44MzMzMyA4LjAwMDA4SDUuNUM2LjEwNzc5IDguMDAwMDggNi42OTA2OCA4LjI0MTUyIDcuMTIwNDUgOC42NzEzQzcuNTUwMjIgOS4xMDEwNyA3Ljc5MTY3IDkuNjgzOTYgNy43OTE2NyAxMC4yOTE3QzcuNzkxNjcgMTAuODk5NSA3LjU1MDIyIDExLjQ4MjQgNy4xMjA0NSAxMS45MTIyQzYuNjkwNjggMTIuMzQyIDYuMTA3NzkgMTIuNTgzNCA1LjUgMTIuNTgzNEgxLjgzMzMzVjguMDAwMDhaTTExLjkxNjcgMi41QzExLjkxNjcgMi4yNTY4OCAxMi4wMTMyIDIuMDIzNzMgMTIuMTg1MiAxLjg1MTgyQzEyLjM1NzEgMS42Nzk5MSAxMi41OTAyIDEuNTgzMzMgMTIuODMzMyAxLjU4MzMzSDE2LjA0MTdDMTYuMjg0OCAxLjU4MzMzIDE2LjUxNzkgMS42Nzk5MSAxNi42ODk4IDEuODUxODJDMTYuODYxOCAyLjAyMzczIDE2Ljk1ODMgMi4yNTY4OCAxNi45NTgzIDIuNUMxNi45NTgzIDIuNzQzMTIgMTYuODYxOCAyLjk3NjI3IDE2LjY4OTggMy4xNDgxOEMxNi41MTc5IDMuMzIwMDkgMTYuMjg0OCAzLjQxNjY3IDE2LjA0MTcgMy40MTY2N0gxMi44MzMzQzEyLjU5MDIgMy40MTY2NyAxMi4zNTcxIDMuMzIwMDkgMTIuMTg1MiAzLjE0ODE4QzEyLjAxMzIgMi45NzYyNyAxMS45MTY3IDIuNzQzMTIgMTEuOTE2NyAyLjVaTTkuNjI1IDguOTE2NjdDOS42MjUgNi4zMzM1IDExLjgzMzMgNC4zMzMzMyAxNC40Mzc1IDQuMzMzMzNDMTcuMDQxNyA0LjMzMzMzIDE5LjI1IDYuMzMzNSAxOS4yNSA4LjkxNjY3QzE5LjI1IDkuMTU5NzggMTkuMTUzNCA5LjM5Mjk0IDE4Ljk4MTUgOS41NjQ4NUMxOC44MDk2IDkuNzM2NzYgMTguNTc2NCA5LjgzMzMzIDE4LjMzMzMgOS44MzMzM0gxMS40NTgzQzExLjQ1ODMgMTEuMyAxMi43Mzg5IDEyLjU4MzMgMTQuNDM3NSAxMi41ODMzQzE1LjQ1NDEgMTIuNTgzMyAxNi4xMTg3IDEyLjI5NTUgMTYuNTEzOCAxMi4wNDE2QzE2LjcwODIgMTEuOTIzIDE2Ljg4MTYgMTEuNzczMSAxNy4wMjcxIDExLjU5NzlDMTcuMTY3MiAxMS40MDI2IDE3LjM3ODMgMTEuMjcwMSAxNy42MTUyIDExLjIyOUMxNy44NTIgMTEuMTg3OSAxOC4wOTU1IDExLjI0MTQgMTguMjkzMiAxMS4zNzgxQzE4LjQ5MDkgMTEuNTE0NyAxOC42MjcxIDExLjcyMzYgMTguNjcyMyAxMS45NTk3QzE4LjcxNzUgMTIuMTk1NyAxOC42NjgyIDEyLjQ0MDEgMTguNTM1IDEyLjY0MDJDMTguMjI4OCAxMy4wMDUgMTcuOTEwNyAxMy4zMjIyIDE3LjUwNTYgMTMuNTgyNUMxNi44MzE4IDE0LjAxNyAxNS44MjYzIDE0LjQxNjcgMTQuNDM3NSAxNC40MTY3QzExLjgzMzMgMTQuNDE2NyA5LjYyNSAxMi40MTY1IDkuNjI1IDkuODMzMzNWOC45MTY2N1pNMTQuNDM3NSA2LjE2NjY3QzE1Ljc2NzYgNi4xNjY2NyAxNi44NDE5IDYuOTU0MDggMTcuMjQ1MyA4SDExLjYyOThDMTIuMDMzMSA2Ljk1NDA4IDEzLjEwNzQgNi4xNjY2NyAxNC40Mzc1IDYuMTY2NjdaIiBmaWxsPSIjMEY4Q0ZGIi8+Cjwvc3ZnPgo=');
					background-size: cover;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
			}
			.youtube {
				&:before {
					content: '';
					width: 20px;
					height: 17px;
					background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjM1Nzg1IDIuODM1MTlDOC43MzM4NSAyLjQ5ODc3IDExLjU5OTQgMi40OTg3NyAxMy45NzU0IDIuODM1MTlDMTYuMTM0MSAzLjE0MTM1IDE3LjgwNyA0LjY1NTY5IDE4LjEyNiA2LjI4NzM1QzE4LjUxMzggOC4yNjI3NyAxOC41MTM4IDEwLjY1MzQgMTguMTI2IDEyLjYyODlDMTcuODA2MSAxNC4yNjA1IDE2LjEzNDEgMTUuNzc0OSAxMy45NzU0IDE2LjA4MUMxMS41OTk0IDE2LjQxNzQgOC43MzI5MyAxNi40MTc0IDYuMzU3ODUgMTYuMDgxQzQuMTk5MSAxNS43NzQ5IDIuNTI3MSAxNC4yNjA1IDIuMjA3MTggMTIuNjI4OUMxLjgxOTQzIDEwLjY1MzQgMS44MTk0MyA4LjI2Mjc3IDIuMjA3MTggNi4yODczNUMyLjUyNzEgNC42NTU2OSA0LjE5OTEgMy4xNDEzNSA2LjM1Nzg1IDIuODM1MTlaTTE0LjIzMiAxLjAyMDE5QzExLjY4NjQgMC42NTk5MzggOC42NDY3NyAwLjY1OTkzOCA2LjEwMTE4IDEuMDIwMTlDMy4zMzc0MyAxLjQxMTYgMC45MDgyNjcgMy4zODMzNSAwLjQwODY4NCA1LjkzNTM1Qy0wLjAyNDg5OTcgOC4xNDM2IC0wLjAyNDg5OTcgMTAuNzcyNiAwLjQwODY4NCAxMi45ODA5QzAuOTA4MjY3IDE1LjUzMjkgMy4zMzc0MyAxNy41MDQ2IDYuMTAxMTggMTcuODk2QzguNjQ2NzcgMTguMjU2MyAxMS42ODY0IDE4LjI1NjMgMTQuMjMyIDE3Ljg5NkMxNi45OTU4IDE3LjUwNDYgMTkuNDI0OSAxNS41MzI5IDE5LjkyNDUgMTIuOTgwOUMyMC4zNTgxIDEwLjc3MjYgMjAuMzU4MSA4LjE0MzYgMTkuOTI0NSA1LjkzNTM1QzE5LjQyNDkgMy4zODMzNSAxNi45OTU4IDEuNDExNiAxNC4yMzIgMS4wMjAxOVpNOC44NDIwMiA1LjAyODc3QzguNzAzOTcgNC45MzY2NyA4LjU0MzUgNC44ODM3NiA4LjM3Nzc0IDQuODc1NzFDOC4yMTE5OCA0Ljg2NzY2IDguMDQ3MTQgNC45MDQ3NiA3LjkwMDgyIDQuOTgzMDVDNy43NTQ0OSA1LjA2MTM1IDcuNjMyMTYgNS4xNzc4OSA3LjU0Njg4IDUuMzIwMjZDNy40NjE2IDUuNDYyNjMgNy40MTY1OCA1LjYyNTQ4IDcuNDE2NiA1Ljc5MTQ0VjEzLjEyNDhDNy40MTY1OCAxMy4yOTA3IDcuNDYxNiAxMy40NTM2IDcuNTQ2ODggMTMuNTk1OUM3LjYzMjE2IDEzLjczODMgNy43NTQ0OSAxMy44NTQ5IDcuOTAwODIgMTMuOTMzMkM4LjA0NzE0IDE0LjAxMTQgOC4yMTE5OCAxNC4wNDg1IDguMzc3NzQgMTQuMDQwNUM4LjU0MzUgMTQuMDMyNCA4LjcwMzk3IDEzLjk3OTUgOC44NDIwMiAxMy44ODc0TDE0LjM0MiAxMC4yMjA4QzE0LjQ2NzYgMTAuMTM3MSAxNC41NzA1IDEwLjAyMzYgMTQuNjQxNyA5Ljg5MDZDMTQuNzEyOSA5Ljc1NzU2IDE0Ljc1MDEgOS42MDkgMTQuNzUwMSA5LjQ1ODFDMTQuNzUwMSA5LjMwNzIxIDE0LjcxMjkgOS4xNTg2NSAxNC42NDE3IDkuMDI1NkMxNC41NzA1IDguODkyNTYgMTQuNDY3NiA4Ljc3OTE1IDE0LjM0MiA4LjY5NTQ0TDguODQyMDIgNS4wMjg3N1pNMTIuMTgwNSA5LjQ1ODFMOS4yNDk5MyAxMS40MTI0VjcuNTA0NjlMMTIuMTgwNSA5LjQ1ODFaIiBmaWxsPSIjRkY0MzQzIi8+Cjwvc3ZnPgo=');
					background-size: cover;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
			}
			.upwork {
				&:before {
					content: '';
					width: 24px;
					height: 20px;
					background-image: url('../assets/img/upwork.png');
					background-size: cover;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
			}
		}
	}
}
</style>
