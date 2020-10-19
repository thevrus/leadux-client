<template>
	<div>
		<Tabs :tabs="tabs" :initialTab="tabs[0]">
			<template slot="questions">
				<Comments />
			</template>

			<template slot="exercises">
				<Exercises />
			</template>

			<template slot="materials">
				<Materials />
			</template>
		</Tabs>
	</div>
</template>

<script>
import Tabs from '@/components/panel/Tabs'
import Comments from '@/components/panel/comments/Comments'
import Exercises from '@/components/panel/exercises/Exercises'
import Materials from '@/components/panel/materials/Materials'

export default {
	name: 'Panel',
	components: {
		Tabs,
		Comments,
		Exercises,
		Materials,
	},
	data() {
		return {
			tabs: [
				{ name: 'questions', value: 'Вопросы и ответы' },
				{ name: 'exercises', value: 'Задания' },
				{ name: 'materials', value: 'Материалы' },
			],
		}
	},
}
</script>
