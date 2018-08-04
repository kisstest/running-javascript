<template>
  <div>
    <home-button></home-button>
    <h1>Operation</h1>
    <div>
      <p>{{ skipIt }}</p>
      <p>{{ x }}</p>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  name: 'Operator',
  components: { HomeButton },
  data() {
    return {
      skipIt: true,
      x: 0,
      result: null,
      obj: {
        b: 2,
        c: 3,
        d: 4,
      },
    };
  },
  mounted() {
    function update(birthYear, occupation) {
      this.birthYear = birthYear;
      this.occupation = occupation;
    }
    const bruce = { name: 'Bruce' };
    update.call(bruce, 1940, 'singer');
    console.log(JSON.stringify(bruce));
  },
};
</script>

<style scoped>

</style>
