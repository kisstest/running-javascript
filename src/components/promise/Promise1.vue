<template>
  <div>
    <home-button></home-button>
    <h1>Promise1</h1>
    <div>
      <p>data1: {{ data1 }}</p>
      <p>data2: {{ data2 }}</p>
    </div>
    <h2>Promise reject</h2>
    <div>{{ reject }}</div>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  data() {
    return {
      data1: null,
      data2: null,
      reject: null,
    };
  },
  components: { HomeButton },
  methods: {
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
      return this.axios.get('http://httpbin/org/status/400');
    },
    getReject() {
      return new Promise(((resolve, reject) => reject(new Error('오류'))));
    },
    onRejected() {
      console.log('onRejected');
    },
    onResolved() {
      console.log('onResolved');
    },
  },
  mounted() {
    this.getData2()
      .then(this.getData1)
      .then(this.getUrl)
      .then(this.getReject)
      .then(this.onResolved)
      .catch(this.onRejected);
    Promise.all([this.getData1(), this.getUrl(), this.getData2()])
      .then(this.onResolved)
      .catch(this.onRejected);
    console.log('==Starting==');
  },
};
</script>

<style scoped>

</style>
