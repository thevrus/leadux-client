import Vue from 'vue'
import VS2 from 'vue-script2'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VS2)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
