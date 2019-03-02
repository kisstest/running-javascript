<template>
  <v-app>
    <v-layout
      wrap
      style="height: 200px;"
    >
      <v-toolbar dark color="primary">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>refresh</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
        <v-layout justify-center>
          <v-btn
            color="pink"
            dark
            @click.stop="drawer = !drawer"
          >
            Toggle
          </v-btn>
        </v-layout>
      </v-container>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="mini"
        absolute
        dark
        temporary
      >
        <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider light></v-divider>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click="menu"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-app>
  <!-- <div id="app-container" class="container-fluid d-flex flex-column justify-content-center">
    <div class="vue-logo">
      <img src="./assets/logo.png">
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div> -->
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
      mini: false,
      right: null,
    };
  },
  methods: {
    menu() {
      console.log('menu');
    },
  },
};
</script>

<style lang="scss">
// @import '../node_modules/bootstrap/scss/bootstrap.scss';
// @import '@/assets/style/common.scss';
</style>
