<template>
  <router-link :to="{ name: home }">
    <button type="button" class="btn btn-success ml-1 mr-1">{{ home }}</button>
  </router-link>
</template>

<script>
export default {
  name: 'HomeButton',
  data() {
    return {
      home: 'Home',
    };
  },
};
</script>

<style scoped>

</style>
