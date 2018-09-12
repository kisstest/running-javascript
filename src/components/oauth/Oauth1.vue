<template>
  <div>
    <home-button></home-button>
    <h1>Oauth1</h1>
    <div class="container mt-3 mb-3" v-if="result">
      <div class="row justify-content-sm-center">
        <div class="col-sm-6">
          <div class="card">
            <h5 class="card-title">Result</h5>
            <ul class="list-group">
              <li class="list-group-item"
                v-for="(item, index) in result.items" :key="index"
                :style="`backgroundColor: ${item.backgroundColor}`"
              >
                <button
                  type="button" class="btn btn-outline-primary"
                  @click="getEventList(item.id)"
                >{{ item.summary }}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-success"
      v-if="!validAccessToken"
      @click="oauth2SignIn"
    >Google Login</button>
    <button type="button" class="btn btn-primary"
      @click="trySampleRequest"
      v-else
    >Get Google Calendar Info</button>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  name: 'Oauth1',
  data() {
    return {
      result: null,
      hasAccessToken: null,
    };
  },
  components: { HomeButton },
  methods: {
    // If there's an access token, try an API request.
    // Otherwise, start OAuth 2.0 flow.
    trySampleRequest() {
      const params = JSON.parse(localStorage.getItem('oauth2-params'));
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
              this.result = response.data;
            } else {
              this.hasAccessToken = false;
            }
          })
          // TODO: access token이 만료(expired)되면 자동으로 로그인? 체크하기
          .catch((err) => {
            console.log(err);
            this.hasAccessToken = false;
          });
      } else {
        this.hasAccessToken = false;
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
    getEventList(id) {
      console.log(id);
      const params = JSON.parse(localStorage.getItem('oauth2-params'));
      this.axios.get(`https://www.googleapis.com/calendar/v3/calendars/${id}/events`
        , {
          headers: {
            Authorization: `Bearer ${params.access_token}`,
          },
          params: {
            calendarId: 'primary',
            // timeMin: (new Date()).toISOString(),
            timeMax: (new Date('2018-08-01')).toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 10,
            orderBy: 'startTime',
          },
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    validAccessToken() {
      return this.hasAccessToken;
    },
  },
  mounted() {
    /**
     * @description 'access token'의 상태에 따라 세가지 형태가 존재한다
     * 1. 'access token'이 없는경우
     * 2. 'access token'이 있지만 유효하지 않을경우(token의 유효시간은 기본적으로 1시간이다)
     * 3. 'access token'이 유효할 경우
     */
    this.$nextTick(() => {
      if (!localStorage.getItem('oauth2-params')) {
        this.hasAccessToken = false;
      } else {
        this.hasAccessToken = true;
      }
    });

    {
      const fragmentString = location.hash.substring(1);
      console.log(`fragmentString: ${fragmentString}`);

      // Parse query string to see if page request is coming from OAuth 2.0 server.
      const params = {};
      const regex = /([^&=]+)=([^&]*)/g;
      console.log(regex.exec(fragmentString));
      const m = regex.exec(fragmentString);
      console.log(m);
      if (m instanceof Array) {
        console.log('params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);');
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      }
      if (Object.keys(params).length > 0) {
        console.log(1);
        localStorage.setItem('oauth2-params', JSON.stringify(params));
        if (params.state && params.state === 'try_sample_request') {
          console.log('trySampleRequest hey');
          this.trySampleRequest();
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
