<template>
  <div>
    <h1>Class</h1>
  </div>
</template>

<script>
import Car from './Car';

export default {
  mounted() {
    const bmw = new Car('ford', 123);
    bmw.shift('D');
    console.log(bmw);
  },
};
</script>

<style scoped>

</style>
