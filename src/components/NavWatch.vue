<template>
	<div class="wrapper">
		<router-link to="/" class="logo__link">Leadux</router-link>

		<div class="progresss">
			<div class="progress__container">
				<div class="progress__wrapper">
					<span class="progress__title">Прогресс курса</span>
					<span class="progress__numbers"
						>{{ watchedVideos }} из {{ totalLessons }}</span
					>
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
	data() {
		return {
			watchedVideos: 1,
			isStudent: false,
		}
	},
	methods: {},

	computed: {
		progress() {
			return 'width:' + (100 / this.totalLessons) * this.watchedVideos + '%'
		},

		totalLessons() {
			return this.$store.getters['lessons/getLessonsLength']
		},
	},
}
</script>

<style  scoped>
.wrapper {
	max-width: 1580px;
	height: 80px;
	padding: 0 2.2rem;
	margin-top: 1.75rem;
	margin-bottom: 2.6rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #2c2c2c;
	border: 1px solid #363636;
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
