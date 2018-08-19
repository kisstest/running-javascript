<template>
  <div>
    <home-button></home-button>
    <h1>Oauth1</h1>
    <button type="button" class="btn btn-primary"
      @click="oauth"
    >Oauth 시작하기</button>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  data() {
    return {
      googleAuth: null,
      scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly',
    };
  },
  components: { HomeButton },
  methods: {
    oauth() {
    },
  },
  mounted() {
    function handleClientLoad() {
      // Load the API's client and auth2 modules.
      // Call the initClient function after the modules load.
      gapi.load('client:auth2', initClient);
    }

    function initClient() {
      // Retrieve the discovery document for version 3 of Google Drive API.
      // In practice, your app can retrieve one or more discovery documents.
      // var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

      // Initialize the gapi.client object, which app uses to make API requests.
      // Get API key and client ID from API Console.
      // 'scope' field specifies space-delimited list of access scopes.
      gapi.client.init({
          // 'apiKey': 'YOUR_API_KEY',
          // 'discoveryDocs': [discoveryUrl],
          'clientId': 'YOUR_CLIENT_ID',
          'scope': this.scope,
      }).then(function () {
        this.googleAuth = gapi.auth2.getAuthInstance();

        // Listen for sign-in state changes.
        this.googleAuth.isSignedIn.listen(updateSigninStatus);

        // Handle initial sign-in state. (Determine if user is already signed in.)
        var user = this.googleAuth.currentUser.get();
        setSigninStatus();

        // Call handleAuthClick function when user clicks on
        //      "Sign In/Authorize" button.
        $('#sign-in-or-out-button').click(function() {
          handleAuthClick();
        }); 
        $('#revoke-access-button').click(function() {
          revokeAccess();
        }); 
      });
    }

    function handleAuthClick() {
      if (this.googleAuth.isSignedIn.get()) {
        // User is authorized and has clicked 'Sign out' button.
        this.googleAuth.signOut();
      } else {
        // User is not signed in. Start Google auth flow.
        this.googleAuth.signIn();
      }
    }

    function revokeAccess() {
      this.googleAuth.disconnect();
    }

    function setSigninStatus(isSignedIn) {
      var user = this.googleAuth.currentUser.get();
      var isAuthorized = user.hasGrantedScopes(this.scope);
      if (isAuthorized) {
        $('#sign-in-or-out-button').html('Sign out');
        $('#revoke-access-button').css('display', 'inline-block');
        $('#auth-status').html('You are currently signed in and have granted ' +
            'access to this app.');
      } else {
        $('#sign-in-or-out-button').html('Sign In/Authorize');
        $('#revoke-access-button').css('display', 'none');
        $('#auth-status').html('You have not authorized this app or you are ' +
            'signed out.');
      }
    }

    function updateSigninStatus(isSignedIn) {
      setSigninStatus();
    }
  },
};
</script>
https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly

AIzaSyDYx8f4_fhYw2GP9LTxVoArwopuNYf8Dk0
<style lang="scss" scoped>

</style>
