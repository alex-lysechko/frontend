/**
 * Imports
 */
import Vue from 'vue'
import App from './components/app/App';
import Axios from "axios";
import qs from "qs";
import VueRouter from 'vue-router'
import Router from "./plugins/router/Router";
import i18n from './plugins/i18n/I18n'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

/**
 * Include Boostrap
 */
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

/**
 * Include Router
 */
Vue.use(VueRouter);

/**
 * Custom Config
 */
Vue.config.productionTip = true;
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$http = Axios;
Vue.prototype.$http.interceptors.request.use(config => {
  config.data = qs.stringify(config.data);

  return config;
});

window.Vue = Vue;

/**
 * Init
 */
new Vue({
  i18n: i18n,
  router: Router,
  render: h => h(App),
}).$mount('#app');