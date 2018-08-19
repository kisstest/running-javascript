import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Operator from '@/components/ch5/Operator';
import Class from '@/components/ch9/Class';
import Reduce from '@/components/array/Reduce';
import Promise1 from '@/components/promise/Promise1';
import Promise2 from '@/components/promise/Promise2';
import Promise3 from '@/components/promise/Promise3';
import Promise4 from '@/components/promise/Promise4';
import Oauth1 from '@/components/oauth/Oauth1';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/ch5',
      name: 'Operator',
      component: Operator,
    },
    {
      path: '/ch9',
      name: 'Class',
      component: Class,
    },
    {
      path: '/promise/1',
      name: 'Promise1',
      component: Promise1,
    },
    {
      path: '/promise/2',
      name: 'Promise2',
      component: Promise2,
    },
    {
      path: '/promise/3',
      name: 'Promise3',
      component: Promise3,
    },
    {
      path: '/promise/4',
      name: 'Promise4',
      component: Promise4,
    },
    {
      path: '/oauth/1',
      name: 'Oauth1',
      component: Oauth1,
    },
    {
      path: '/array/reduce',
      name: 'Reduce',
      component: Reduce,
    },
  ],
});
