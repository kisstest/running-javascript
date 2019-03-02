<template>
  <div>
    <home-button></home-button>
    <h1>{{ $options.name }}</h1>
    <button @click="goAsync"
            type="button"
            class="btn btn-primary">Async</button>
    <div>
    </div>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  name: 'Async',
  data() {
    return {};
  },
  components: {
    HomeButton,
  },
  methods: {
    getCoffee() {
      return new Promise((resolve) => {
        setTimeout(() => resolve('☕'), 5000); // it takes 2 seconds to make coffee
      });
    },
    goAsync() {
      (async () => {
        try {
          // but first, coffee
          this.loading = true;
          const coffee = await this.getCoffee();
          console.log(coffee); // ☕
          // then we grab some data over an Ajax request
          const wes = await this.axios.get('https://api.github.com/users/wesbos');
          console.log(wes.data); // mediocre code
          // many requests should be concurrent - don't slow things down!
          // fire off two requests and save their promises
          const userPromise = this.axios.get('https://randomuser.me/api/');
          const namePromise = this.axios.get('https://uinames.com/api/');
          // await all two promises to come back and destructure the result into their own variables
          const [user, name] = await Promise.all([userPromise, namePromise]);
          if (wes.data.id === 176013) {
            console.log(user.data, name.data); // cool, {...}, {....}
          }
        } catch (e) {
          console.error(e); // 💩
        }
      })();
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>

</style>
