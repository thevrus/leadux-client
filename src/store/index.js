import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './modules/auth.module'
import { lessons } from './modules/lessons.module'
import { comments } from './modules/comments.module'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth,
		lessons,
		comments,
	},
	state: {},
})
