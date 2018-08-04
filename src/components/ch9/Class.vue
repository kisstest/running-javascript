<template>
  <div>
    <home-button></home-button>
    <h1>Class</h1>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';
import { Vehicle, Car, Motorcycle } from './Car';

export default {
  name: 'Class',
  components: { HomeButton },
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
