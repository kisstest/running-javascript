<template>
  <div>
    <button @click="backToHome">back to home</button>
    <h1>Promise example & Content loading</h1>
    <div v-if="!loading">
      <p>data1: {{ data1 }}</p>
      <p>data2: {{ data2 }}</p>
    </div>
    <vue-content-loading :width="300" :height="100" v-else>
      <rect rtl x="125" y="0" rx="4" ry="4" width="50" height="3" />
      <rect rtl x="125" y="5" rx="4" ry="4" width="50" height="3" />
    </vue-content-loading>
  </div>
</template>

<script>
import VueContentLoading from 'vue-content-loading';

export default {
  data() {
    return {
      loading: false,
      data1: null,
      data2: null,
    };
  },
  components: { VueContentLoading },
  methods: {
    backToHome() {
      this.$router.push({ name: 'HelloWorld' });
    },
    getData1() {
      return this.axios.get('http://httpbin.org/get')
        .then((response) => {
          console.log(response.data);
          this.data1 = response.data.url;
        });
    },
    getData2() {
      return this.axios.get('https://randomuser.me/api/')
        .then((response) => {
          console.log(response.data);
          this.data2 = response.data.info.seed;
        });
    },
  },
  mounted() {
    this.loading = true;
    // const gdata1 = this.getData1();
    // const gdata2 = this.getData2();
    this.getData2()
      .then(this.getData1)
      .then(() => {
        this.loading = false;
      });
  },
};
</script>

<style scoped>

</style>
