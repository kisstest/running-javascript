<template>
  <div id="app-container" class="container-fluid d-flex flex-column justify-content-center">
    <div class="vue-logo">
      <img src="./assets/logo.png">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import '@/assets/style/common.scss';
</style>
