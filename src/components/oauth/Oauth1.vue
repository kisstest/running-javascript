<template>
  <div>
    <home-button></home-button>
    <h1>Oauth1</h1>
    <div class="container mt-3 mb-3" v-if="result">
      <div class="row justify-content-sm-center">
        <div class="col-sm-6">
          <div class="card">
            <h5 class="card-title">Result</h5>
            <p>{{ result }}</p>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-success"
      @click="trySampleRequest"
    >trySampleRequest</button>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  name: 'Oauth1',
  data() {
    return {
      result: null,
    };
  },
  components: { HomeButton },
  methods: {
    // If there's an access token, try an API request.
    // Otherwise, start OAuth 2.0 flow.
    trySampleRequest() {
      const params = JSON.parse(localStorage.getItem('oauth2-test-params'));
      if (params && params.access_token) {
        console.log('trySampleRequest');
        this.axios.get('https://www.googleapis.com/calendar/v3/users/me/calendarList'
          , {
            params: {
              access_token: params.access_token,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              this.result = response;
              // this.result = JSON.parse(response, (key, value) => {
              // });
            } else {
              this.oauth2SignIn();
            }
          });
      } else {
        this.oauth2SignIn();
      }
    },
    oauth2SignIn() {
      // Google's OAuth 2.0 endpoint for requesting an access token
      const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

      // Create <form> element to submit parameters to OAuth 2.0 endpoint.
      const form = document.createElement('form');
      form.setAttribute('method', 'GET'); // Send as a GET request.
      form.setAttribute('action', oauth2Endpoint);

      // Parameters to pass to OAuth 2.0 endpoint.
      const params = {
        client_id: '809257081995-at1j9ket616el274c69p4iffjf3n1ldn.apps.googleusercontent.com',
        redirect_uri: 'http://localhost:8080/oauth/1',
        response_type: 'token',
        scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly',
        include_granted_scopes: 'true',
        state: 'pass-through value',
      };

      const arr = Object.keys(params);
      arr.map((value) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', value);
        input.setAttribute('value', params[value]);
        form.appendChild(input);
        return value;
      });

      // Add form to page and submit it to open the OAuth 2.0 endpoint.
      document.body.appendChild(form);
      form.submit();
    },
  },
  mounted() {
    // const YOUR_CLIENT_ID = 'REPLACE_THIS_VALUE';
    // const YOUR_REDIRECT_URI = 'REPLACE_THIS_VALUE';
    const fragmentString = location.hash.substring(1);
    console.log(`fragmentString: ${fragmentString}`);

    // Parse query string to see if page request is coming from OAuth 2.0 server.
    const params = {};
    const regex = /([^&=]+)=([^&]*)/g;
    // state=pass-through+value&access_token=ya29.GlwNBoX5qgoMiUqjgwopFbNwcr5Uxs3g2BlxG_zbBI1NNUikpdvBaw6V58dBBhR8s9eO4D0WGfSF3gvCjexD6HJ48moVIgFabqenq3adoO-WIJ4Se1H1BjhOdjuClA&token_type=Bearer&expires_in=3600&scope=https://www.googleapis.com/auth/calendar.readonly+https://www.googleapis.com/auth/calendar
    console.log(regex.exec(fragmentString));
    const m = regex.exec(fragmentString);
    console.log(m);
    if (m instanceof Array) {
      console.log('params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);');
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    if (Object.keys(params).length > 0) {
      console.log(1);
      localStorage.setItem('oauth2-test-params', JSON.stringify(params));
      if (params.state && params.state === 'try_sample_request') {
        console.log('trySampleRequest hey');
        this.trySampleRequest();
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
