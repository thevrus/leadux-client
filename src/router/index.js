import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Watch from '../pages/watch.vue'

Vue.use(VueRouter)

const routes = [
	{
		name: 'home',
		path: '/',
		component: Index,
	},
	{
		name: 'watch',
		path: '/watch',
		component: Watch,
	},
	{
		name: 'watch-slug',
		path: '/watch/:slug',
		component: Watch,
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('../pages/login.vue'),
	},
	{
		name: 'register',
		path: '/register',
		component: () => import('../pages/register.vue'),
	},
	{
		name: 'pay',
		path: '/pay',
		component: () => import('../pages/pay.vue'),
	},
	{
		path: '/privacy',
		component: () => import('../pages/privacy.vue'),
	},
	{
		path: '/pay-rules',
		component: () => import('../pages/pay-rules.vue'),
	},
	{
		path: '/about',
		component: () => import('../pages/about.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior() {
		return { x: 0, y: 0 }
	},
})

export default router
