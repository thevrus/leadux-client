import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'

import Watch from '../views/Watch.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/login',
		// component: Login,
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/register',
		// component: Register,
		component: () => import('../views/Register.vue'),
	},
	{
		path: '/watch',
		// path: '/watch/:slug',
		// path: '/watch?lesson=slug',
		component: Watch,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
