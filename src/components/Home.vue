<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Running Javascript</h2>
    <ul class="menu-list">
      <li v-for="menu in menus" :key="menu.name">
        <router-link
          v-if="menu.parent === false"
          :to="{ name: menu.name }"
        >
          <button type="button" class="btn btn-primary ml-1 mr-1">{{ menu.name }}</button>
        </router-link>
        <div class="dropdown" v-else>
          <button
            class="btn btn-primary dropdown-toggle ml-1 mr-1"
            type="button" :id="menu.name" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"
          >
            {{ menu.name }}
          </button>
          <div class="dropdown-menu" :aria-labelledby="menu.name">
            <router-link
              v-for="child in menu.childs" :key="child.name"
              :to="{ name: child.name }"
            >
              <a class="dropdown-item" href="#">{{ child.name }}</a>
            </router-link>
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
      menus: [
        {
          name: 'Operator',
          parent: false,
        },
        {
          name: 'Class',
          parent: false,
        },
        {
          name: 'Reduce',
          parent: false,
        },
        {
          name: 'Promise',
          parent: true,
          childs: [
            {
              name: 'Promise1',
              parent: false,
            },
            {
              name: 'Promise2',
              parent: false,
            },
            {
              name: 'Promise3',
              parent: false,
            },
            {
              name: 'Promise4',
              parent: false,
            },
          ],
        },
        {
          name: 'Oauth',
          parent: true,
          childs: [
            {
              name: 'Oauth1',
              parent: false,
            },
          ],
        },
      ],
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
