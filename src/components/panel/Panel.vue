<template>
	<Tabs :tabs="tabs" :initial-tab="tabs[0]">
		<keep-alive slot="questions">
			<Questions />
		</keep-alive>

		<keep-alive slot="exercises">
			<Exercises />
		</keep-alive>

		<keep-alive slot="materials">
			<Materials />
		</keep-alive>
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
