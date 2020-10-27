import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Watch from '../pages/watch.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Index,
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
		component: () => import('../pages/login.vue'),
	},
	{
		path: '/register',
		component: () => import('../pages/register.vue'),
	},
	{
		path: '/pay',
		component: () => import('../pages/pay.vue'),
	},
	{
		path: '/privacy',
		component: () => import('../pages/privacy.vue'),
	},
	{
		path: '/terms',
		component: () => import('../pages/terms.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
