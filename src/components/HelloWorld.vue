<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Running Javascript</h2>
    <ul>
      <li> <router-link :to="{ name: 'Operator' }">Operator</router-link></li>
      <li> <router-link :to="{ name: 'Class' }">Class</router-link></li>
      <li> <router-link :to="{ name: 'PromiseCh1' }">Promise1</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Kisstest Vue.js App',
    };
  },
};
</script>
