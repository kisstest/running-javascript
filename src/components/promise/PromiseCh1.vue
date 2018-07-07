<template>
  <div>
    <button class="btn btn-primary" @click="backToHome">back to home</button>
    <h2>Promise example & Content loading</h2>
    <div v-if="!loading">
      <p>data1: {{ data1 }}</p>
      <p>data2: {{ data2 }}</p>
    </div>
    <vue-content-loading :width="0" :height="100" v-else>
      <rect rtl x="125" y="0" rx="4" ry="4" width="50" height="3" />
      <rect rtl x="125" y="5" rx="4" ry="4" width="50" height="3" />
    </vue-content-loading>
    <h2>Promise reject</h2>
    <div>{{ reject }}</div>
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
      reject: null,
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
    getUrl() {
      return this.axios.get('http://httpbin/org/status/400')
        .then((response) => {
          console.log(response.data);
          this.reject = response.data;
        })
        .catch((error) => {
          this.reject = 'Error';
          console.error(error);
        });
    },
    getReject() {
      return new Promise(((resolve, reject) => reject(new Error('오류'))))
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
  mounted() {
    this.loading = true;
    this.getData2()
      .then(this.getData1)
      .then(this.getUrl)
      // .then(this.getReject)
      .then(() => {
        this.loading = false;
      });
  },
};
</script>

<style scoped>

</style>
