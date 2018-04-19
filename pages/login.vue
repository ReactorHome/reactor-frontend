<template>
  <section class="page-container">
    <Navbar></Navbar>


  <div id="loginSectionWrapper">
    <section id="login">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="test" placeholder="Username" v-model="loginUsername">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" v-model="loginPassword">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button @click="requestToken" class="button is-success">
            Login
          </button>


        </p>
      </div>
    </section>

    <section id="register">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Username" v-model="createUsername">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" v-model="createEmail">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" v-model="createPassword">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>


      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Confirm Password" v-model="confirmPassword">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="First Name" v-model="createFirstName">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Last Name" v-model="createLastName">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control">
          <button class="button is-success">
            Register
          </button>
        </p>
      </div>





    </section>

  </div>


  </section>

</template>





<script>
import Navbar from '~/components/Navbar.vue';

export default {


  data: function(){
    return {
      loginUsername: "",
      loginPassword: "",
      createUsername: "",
      createEmail: "",
      createPassword: "",
      confirmPassword: "",
      createFirstName: "",
      createLastName: ""

    }

  },

  name: "login",

  components: {
    Navbar
  },

  //This will run on page load
  mounted: function() {
    //check if cookie already exists
    const token = this.getCookie("token");
    if (token !== "") this.$router.push("home");
  },
  methods: {
    requestToken: function() {
      let loginCreds = {password: this.loginPassword, username: this.loginUsername, grant_type: 'password', scope: 'write', client_id: 'api-user'};

      console.log("Into request Token")

      $.post("https://api.myreactorhome.com/user/oauth/token", loginCreds, this.loginHandler)
        .fail(function(){
          console.log("There was an error loggin in!");
        });
    },

    loginHandler: function(result, status) {
      console.log("result:");
      console.log(result);

      console.log("Into Login Handler");

      let currentDT = Date.now();
      let expireTime = currentDT + (result.expires_in * 1000);

      console.log("Current UTC: " + currentDT + " new expire time: " + expireTime);

      if(typeof(Storage) !== "undefined"){
        localStorage.accessToken = result.access_token;
        localStorage.expires = expireTime;
        localStorage.refreshToken = result.refresh_token

      }else{
        console.log("This browser doesnt support web storage!")
      }

      //this.setCookie(result.access_token, expireTime, result.refresh_token);
      this.$router.push("home");
    },

    setCookie: function(token, ex_seconds, refreshToken) {
      let d = new Date();
      d.setTime(d.getTime() + (ex_seconds));
      let expires = "expires="+ d.toUTCString();
      document.cookie = "username=" + this.loginUsername + ",token=" + token + "," + expires + ",refreshToken=" + refreshToken + ",path=/";
      console.log(document.cookie);
    },

    getCookie: function(cname) {
      const name = cname + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(',');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    checkCookie: function() {

    }

  }
}





</script>


<style type="text/css">

  #loginSectionWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;
    width:100%;
  }


  #login,#register{

    border: black thin solid;
    border-radius: 25px;
    padding: 15px;


  }



</style>








