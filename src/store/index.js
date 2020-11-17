import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './modules/auth.module'
import { lessons } from './modules/lessons.module'
import { questions } from './modules/questions.module'
import { exercises } from './modules/exercises.module'
import { materials } from './modules/materials.module'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth,
		lessons,
		questions,
		exercises,
		materials,
	},
	state: {},
})
