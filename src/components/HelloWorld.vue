<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Running Javascript</h2>
    <ul class="menu-list">
      <li>
        <router-link :to="{ name: 'Operator' }">
          <button type="button" class="btn btn-primary ml-1 mr-1">Operator</button>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Class' }">
          <button type="button" class="btn btn-primary ml-1 mr-1">Class</button>
        </router-link>
      </li>
      <li>
        <!-- <router-link :to="{ name: 'PromiseCh1' }">Promise1</router-link> -->
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle ml-1 mr-1"
            type="button" id="dropdownMenuPromise" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"
          >
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuPromise">
            <router-link :to="{ name: 'PromiseCh1' }">
              <a class="dropdown-item" href="#">PromiseCh1</a>
            </router-link>
            <router-link :to="{ name: 'PromiseCh2' }">
              <a class="dropdown-item" href="#">PromiseCh2</a>
            </router-link>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
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

<style lang="scss" scoped>
ul.menu-list {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
</style>
