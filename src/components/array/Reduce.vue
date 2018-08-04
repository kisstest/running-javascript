<template>
  <div>
    <home-button></home-button>
    <h1>Reduce</h1>
    <p>{{ arr }}</p>
    <p>{{ sum }}</p>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  name: 'Reduce',
  components: { HomeButton },
  data() {
    return {
      arr: [],
      sum: null,
    };
  },
  mounted() {
    this.arr = [5, 1, 23, 4];
    this.sum = this.arr.reduce((a, x) => {
      let accumulator = a;
      const elem = x;
      accumulator += elem;
      return accumulator;
    });
  },
};
</script>

<style scoped>

</style>
