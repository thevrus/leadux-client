<template>
	<div class="wrapper">
		<router-link to="/" class="logo__link">Leadux</router-link>

		<div class="progresss">
			<div class="progress__container">
				<div class="progress__wrapper">
					<span class="progress__title">
						<span v-if="watchedLessons === totalLessons">Курс пройден 🎉</span>
						<span v-else>Прогресс курса</span>
					</span>
					<span class="progress__numbers">
						{{ watchedLessons }} из {{ totalLessons }}
					</span>
				</div>
				<div class="progress__line">
					<div class="progress__line--load" :style="progress"></div>
				</div>
			</div>

			<router-link to="/pay" class="main-btn ml" v-if="!isStudent"
				>Открыть полный доступ</router-link
			>
		</div>

		<UserDetails />
	</div>
</template>

<script>
import UserDetails from '@/components/UserDetails'

export default {
	name: 'NavWatch',
	components: {
		UserDetails,
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn
		},
		progress() {
			return 'width:' + (100 / this.totalLessons) * this.watchedLessons + '%'
		},
		totalLessons() {
			return this.$store.getters['lessons/getLessonsLength']
		},
		watchedLessons() {
			return this.$store.state.lessons.watchedLessons.length
		},
		isStudent() {
			let isStudent
			const roleType = this.$store.state.auth.user
				? this.$store.state.auth.user.user.role.type
				: null

			switch (roleType) {
				case 'student':
					isStudent = true
					break
				case 'advanced':
					isStudent = true
					break
				default:
					isStudent = false
			}
			return isStudent
		},
	},
}
</script>

<style lang="postcss" scoped>
.wrapper {
	max-width: 1580px;
	height: 80px;
	padding: 0 2.2rem;
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--panel-bg);
	border: 1px solid var(--panel-border);

	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
}

.logo__link {
	color: #ffffff;
	font-weight: 700;
	font-size: 1.75rem;
	line-height: 33px;
}

.progresss {
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 665px;
	width: 100%;
	margin: 0 1rem;
}

.progress__container {
	max-width: 380px;
	width: 100%;
	flex-shrink: 1;
}

.progress__wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	max-width: 380px;
}

.progress__title {
	font-weight: 500;
	font-size: 1rem;
	line-height: 140%;
	color: #787878;
}

.progress__numbers {
	font-weight: 500;
	font-size: 1rem;
	line-height: 140%;
	color: #bfbfbf;
}

.progress__line {
	width: 100%;
	height: 4px;
	position: relative;
	background-color: #212121;
	border-radius: 50px;
}

.progress__line--load {
	position: absolute;
	left: 0px;
	right: 0px;
	height: 4px;
	background-color: #34bf6c;
	border-radius: 50px;
	transition: width 0.3s linear;
}

.ml {
	margin-left: 2.5rem;
}
</style>
