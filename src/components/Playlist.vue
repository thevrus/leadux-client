<template>
	<aside>
		<div v-for="playlist in playlists" :key="playlist.id">
			<div v-if="playlist.lessons.length > 0" class="lesson">
				<h4>{{ playlist.name }}</h4>

				<div v-for="lesson in playlist.lessons" :key="lesson.id">
					<h6 @click="handleClick(lesson)">
						{{ lesson.order }}. {{ lesson.title }}
						<span v-if="!lesson.videoId" class="private">– PRIVATE</span>
					</h6>
				</div>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	computed: {
		playlists() {
			return this.$store.getters['lessons/getPlaylists']
		},
		loggedIn() {
			return this.$store.state.auth.loggedIn
		},
	},
	methods: {
		handleClick(lesson) {
			// TODO
			// * If user logged in and withou payment redirect to payment page
			if (lesson.videoId) {
				this.$store.dispatch('lessons/setCurrentLesson', lesson)
			} else {
				this.$router.push('/login')
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.lesson {
	background-color: hsl(0, 0%, 95%);
	padding: 2rem;
	margin: 1rem 2rem;
	border-radius: 0.5rem;
	transition: 0.3s;
	text-align: left;

	:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	.private {
		font-weight: bold;
		letter-spacing: 1px;
		text-transform: uppercase;
		font-size: 0.75rem;
		color: red;
	}

	h4 {
		font-weight: bold;
		margin-bottom: 1rem;
	}
}
</style>
