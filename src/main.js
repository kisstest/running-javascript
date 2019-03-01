// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { VueSpinners } from '@saeris/vue-spinners';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueSpinners);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
