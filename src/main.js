// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap';
import GAuth from 'vue-google-oauth2';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(GAuth, {
  clientId: '809257081995-at1j9ket616el274c69p4iffjf3n1ldn.apps.googleusercontent.com',
  scope: 'profile email https://www.googleapis.com/auth/plus.login',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
