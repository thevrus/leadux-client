import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Watch from '../pages/watch.vue'

Vue.use(VueRouter)

const routes = [
	{
		name: 'Home',
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
	scrollBehavior: function(to) {
		if (to.hash) {
			return { selector: to.hash }
		} else {
			return { x: 0, y: 0 }
		}
	},
})

export default router
