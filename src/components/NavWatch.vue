<template>
	<div class="wrapper">
		<router-link to="/" class="logo__link">Leadux</router-link>

		<div class="progresss" v-if="getLessonsLength">
			<div class="progress__container">
				<div class="progress__wrapper">
					<span class="progress__title">
						<span v-if="watchedLessons.length === getLessonsLength">
							Курс пройден 🎉
						</span>
						<span v-else>Прогресс курса</span>
					</span>
					<span class="progress__numbers">
						{{ watchedLessons.length }} из {{ getLessonsLength }}
					</span>
				</div>
				<div class="progress__line">
					<div class="progress__line--load" :style="progress"></div>
				</div>
			</div>

			<router-link to="/pay" class="main-btn ml" v-if="!isStudent">
				Открыть полный доступ
			</router-link>
		</div>

		<UserDetails />
	</div>
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
		...mapGetters('lessons', ['getLessonsLength', 'watchedLessons']),
		...mapGetters('auth', ['loggedIn', 'user', 'isStudent']),
		progress() {
			return (
				'width:' +
				(100 / this.getLessonsLength) * this.watchedLessons.length +
				'%'
			)
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
	font-weight: 700;
	font-size: responsive 1rem 1.75rem;
	word-break: normal;
	line-height: 33px;
	text-decoration: none;
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
