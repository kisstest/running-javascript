<template>
  <div>
    <h1>Class</h1>
  </div>
</template>

<script>
import { Vehicle, Car, Motorcycle } from './Car';

export default {
  mounted() {
    const v = new Vehicle();
    const c = new Car();
    const m = new Motorcycle();
    console.log(c instanceof Vehicle);
    console.log(v instanceof Vehicle);
    console.log(m instanceof Vehicle);
  },
};
</script>

<style scoped>

</style>
