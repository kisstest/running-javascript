import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Operator from '@/components/ch5/Operator';
import Class from '@/components/ch9/Class';
import PromiseCh1 from '@/components/promise/PromiseCh1';
import PromiseCh2 from '@/components/promise/PromiseCh2';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
      name: 'PromiseCh1',
      component: PromiseCh1,
    },
    {
      path: '/promise/2',
      name: 'PromiseCh2',
      component: PromiseCh2,
    },
  ],
});
