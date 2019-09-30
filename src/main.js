import Vue from 'vue';
import App from './App.vue';
import routes from './routes';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import VueGeolocation from 'vue-browser-geolocation';

Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.use(VueGeolocation);
const router = new VueRouter({mode:'history',routes}) ;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
