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
  methods: {
    getURL(URL) {
      return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = () => {
          if (req.status === 200) {
            resolve(req.responseText);
          } else {
            reject(new Error(req.statusText));
          }
        };
        req.onerror = () => {
          reject(new Error(req.statusText));
        };
        req.send();
      });
    },
  },
  mounted() {
    this.getURL('http://httpbin.org/get').then((value) => {
      this.value = value;
      // console.log(value);
    }).catch((error) => {
      console.error(error);
    });
  },
};
</script>

<style scoped>

</style>
