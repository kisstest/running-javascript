<template>
  <div>
    <home-button></home-button>
    <h1>Oauth1</h1>
    <button type="button" class="btn btn-primary"
      @click="initClient"
    >Oauth 시작하기</button>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  name: 'Oauth1',
  data() {
    return {
      googleAuth: null,
    };
  },
  components: { HomeButton },
  methods: {
    initClient() {
      window.gapi.auth2.init({
        apiKey: 'AIzaSyD73vQfROYv3rr8__SU8r7ZzyEKYPpeOmU',
        clientId: '809257081995-at1j9ket616el274c69p4iffjf3n1ldn.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly',
      }).then(() => {
        this.googleAuth = gapi.auth2.getAuthInstance();
        // Listen for sign-in state changes.
        // this.googleAuth.isSignedIn.listen(updateSigninStatus);
      });
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>

</style>
