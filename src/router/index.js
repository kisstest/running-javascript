import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Operator from '@/components/ch5/Operator';
import Class from '@/components/ch9/Class';

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
  ],
});
