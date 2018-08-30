<template>
  <div>
    <home-button></home-button>
    <h1>Oauth1</h1>
    <button type="button" class="btn btn-primary"
      @click="oauth2SignIn"
    >Oauth 시작하기</button>
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
    };
  },
  components: { HomeButton },
  methods: {
    // If there's an access token, try an API request.
    // Otherwise, start OAuth 2.0 flow.
    trySampleRequest() {
      const params = JSON.parse(localStorage.getItem('oauth2-test-params'));
      if (params && params.access_token) {
        this.axios.get('https://www.googleapis.com/calendar/v3/users/me/calendarList'
          , {
            params: {
              access_token: params.access_token,
            },
          })
          .then((response) => {
            if (response.status === 200) console.log(response);
            else this.oauth2SignIn();
          });
        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://www.googleapis.com/drive/v3/about?fields=user&' + 'access_token=' + params['access_token']);
        // xhr.onreadystatechange = function (e) {
        //   if (xhr.readyState === 4 && xhr.status === 200) {
        //     console.log(xhr.response);
        //   } else if (xhr.readyState === 4 && xhr.status === 401) {
        //     // Token invalid, so prompt for user permission.
        //     oauth2SignIn();
        //   }
        // };
        // xhr.send(null);
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

    // Parse query string to see if page request is coming from OAuth 2.0 server.
    const params = {};
    const regex = /([^&=]+)=([^&]*)/g;
    let m;
    while (m = regex.exec(fragmentString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    if (Object.keys(params).length > 0) {
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
