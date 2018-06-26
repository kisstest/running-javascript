<template>
  <div>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
  mounted() {
    this.axios.get('http://httpbin.org/get')
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

<style scoped>

</style>
