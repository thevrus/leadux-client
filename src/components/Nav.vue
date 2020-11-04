<template>
	<nav class="nav">
		<router-link to="/" class="logo">
			<img src="@/assets/img/logo_white.svg" alt="Leadux" />
		</router-link>

		<div class="progresss" v-if="lessonsLength">
			<div class="center">
				<div class="wrapper">
					<span class="title">
						<span v-if="isCompletedCourse">Курс пройден 🎉</span>
						<span v-else>Прогресс курса</span>
					</span>
					<span class="numbers">
						{{ watchedLessons.length }} из {{ lessonsLength }}
					</span>
				</div>

				<div class="line">
					<div class="line-load" :style="progress"></div>
				</div>
			</div>

			<router-link
				:to="{ name: routerLink, query: nextRoute }"
				v-if="!isStudent"
				class="cta"
			>
				Открыть полный доступ
			</router-link>
		</div>

		<UserDetails />
	</nav>
</template>

<script>
import UserDetails from '@/components/UserDetails'
import { mapGetters } from 'vuex'

export default {
	name: 'NavWatch',
	components: {
		UserDetails,
	},
	computed: {
		...mapGetters('lessons', ['lessonsLength', 'watchedLessons']),
		...mapGetters('auth', ['loggedIn', 'user', 'isStudent']),
		progress() {
			return (
				'width:' + (100 / this.lessonsLength) * this.watchedLessons.length + '%'
			)
		},
		routerLink() {
			return this.loggedIn ? 'Pay' : 'Register'
		},
		nextRoute() {
			return this.isStudent ? { nextRoute: 'Watch' } : null
		},
		isCompletedCourse() {
			return this.watchedLessons.length === this.lessonsLength
		},
	},
}
</script>

<style lang="postcss" scoped>
.nav {
	margin-left: auto;
	margin-right: auto;
	height: 76px;
	padding: 0 2.2rem;
	width: 100%;
	margin-bottom: 1.8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--panel-bg);
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.04);
}

.logo {
	transition: opacity 0.3s;

	&:hover {
		opacity: 0.8;
	}
}

.progresss {
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 665px;
	width: 100%;
	margin: 0 1rem;
}

.center {
	max-width: 380px;
	width: 100%;
	flex-shrink: 1;

	@media (max-width: 768px) {
		display: none;
	}
}

.wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	max-width: 380px;
}

.title {
	font-weight: 500;
	font-size: 1rem;
	line-height: 140%;
	color: #787878;
}

.numbers {
	font-weight: 500;
	font-size: 1rem;
	line-height: 140%;
	color: #bfbfbf;
}

.line {
	width: 100%;
	height: 4px;
	position: relative;
	background-color: #0d0d0d;
	border-radius: 50px;
}

.line-load {
	position: absolute;
	left: 0px;
	right: 0px;
	height: 4px;
	background-color: #2eb761;
	border-radius: 50px;
	transition: width 0.3s linear;
}

.cta {
	background-color: #e937b3;
	text-decoration: none;
	border: none;
	cursor: pointer;
	margin-left: 2.5rem;

	padding: 0.95rem 1.8rem;
	font-size: 0.9rem;
	line-height: 130%;
	border-radius: 12px;
	color: #ffffff;
	transition: opacity 0.2s;
	flex-shrink: 0;

	&:hover {
		opacity: 0.8;
	}
}
</style>
