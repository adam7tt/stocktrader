import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

Vue.use(VueResource);

Vue.http.options.root = "https://stocktrader-b6f8c.firebaseio.com/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
