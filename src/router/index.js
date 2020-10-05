import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Watch from '../views/Watch.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		name: 'Watch',
		path: '/watch',
		component: Watch,
	},
	{
		name: 'WatchSlug',
		path: '/watch/:slug',
		component: Watch,
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/register',
		component: () => import('../views/Register.vue'),
	},
	{
		path: '/pay',
		component: () => import('../views/Pay.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
