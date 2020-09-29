import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Watch from '../views/Watch.vue'
import Thanks from '../views/Thanks.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home,
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
	{
		path: '/me',
		component: () => import('../views/Me.vue'),
	},
	{
		path: '/watch',
		// path: '/watch/:slug',
		// path: '/watch?lesson=slug',
		component: Watch,
	},
	{
		path: '/thanks',
		component: Thanks,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
