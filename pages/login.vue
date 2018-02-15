<template>
  <section class="page-container">
    <Navbar></Navbar>


	<div id="loginSectionWrapper">
		<section id="login">
			<div class="field">
			  <p class="control has-icons-left has-icons-right">
			    <input class="input" type="email" placeholder="Email" v-model="loginUsername">
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
const axios = require('axios');
import Navbar from '~/components/Navbar.vue';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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

	methods: {
		requestToken: function() {
			var data = {password: this.loginPassword, username: this.loginUsername, grant_type: 'password', scope: 'write', client_id: 'api-user'};

			$.post("https://api.myreactorhome.com/user/oauth/token", data, function(result){
				console.log(result);
		    });
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








