<template>
	<Tabs :tabs="tabs" :initialTab="tabs[0]">
		<template slot="questions">
			<Questions />
		</template>

		<template slot="exercises">
			<Exercises />
		</template>

		<template slot="materials">
			<Materials />
		</template>
	</Tabs>
</template>

<script>
import Tabs from '@/components/panel/Tabs'
import Questions from '@/components/panel/questions/Questions'
import Exercises from '@/components/panel/exercises/Exercises'
import Materials from '@/components/panel/materials/Materials'

import questions from '@/assets/img/tab_questions.svg'
import exercises from '@/assets/img/tab_exercises.svg'
import materials from '@/assets/img/tab_materials.svg'

export default {
	name: 'Panel',
	components: {
		Tabs,
		Questions,
		Exercises,
		Materials,
	},
	data() {
		return {
			tabs: [
				{
					name: 'questions',
					value: 'Вопросы и ответы',
					icon: questions,
				},
				{
					name: 'exercises',
					value: 'Задания',
					icon: exercises,
				},
				{
					name: 'materials',
					value: 'Материалы',
					icon: materials,
				},
			],
		}
	},
}
</script>
