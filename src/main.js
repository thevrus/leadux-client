import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import VueShowdown from 'vue-showdown'
import VueGtag from 'vue-gtag'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(VueShowdown, {
	options: {
		emoji: true,
	},
})
Vue.use(VueGtag, {
	config: { id: 'G-LX4HX4HKWY' },
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
