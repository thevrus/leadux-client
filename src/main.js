import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import VueShowdown from 'vue-showdown'
import VueGtag from 'vue-gtag'
import Hotjar from 'vue-hotjar'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(VueShowdown, {
	options: {
		emoji: true,
	},
})
Vue.use(
	VueGtag,
	{
		config: { id: 'G-JLFP5VWW29' },
		appName: 'Leadux',
		pageTrackerScreenviewEnabled: true,
		enabled: process.env.VUE_APP_PROD === true,
	},
	router
)
Vue.use(Hotjar, {
	id: '2153201',
	isProduction: process.env.VUE_APP_PROD === true,
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
