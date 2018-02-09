<template>
  <section class="page-container">
    <Navbar></Navbar>


	<div id="loginSectionWrapper">
		<section id="login">
			<div class="field">
			  <p class="control has-icons-left has-icons-right">
			    <input class="input" type="email" placeholder="Email" v-model="username">
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
			    <input class="input" type="password" placeholder="Password" v-model="password">
			    <span class="icon is-small is-left">
			      <i class="fas fa-lock"></i>
			    </span>
			  </p>
			</div>
			<div class="field">
			  <p class="control">
			    <button class="button is-success">
			      Login
			    </button>


			  </p>
			</div>
		</section>

		<section id="register">
			<div class="field">
			  <p class="control has-icons-left has-icons-right">
			    <input class="input" type="email" placeholder="Username" v-model="username">
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
			    <input class="input" type="email" placeholder="Email" v-model="email">
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
			    <input class="input" type="password" placeholder="Password" v-model="password">
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
			    <input class="input" type="password" placeholder="First Name" v-model="firstName">
			    <span class="icon is-small is-left">
			      <i class="fas fa-lock"></i>
			    </span>
			  </p>
			</div>

			<div class="field">
			  <p class="control has-icons-left">
			    <input class="input" type="password" placeholder="Last Name" v-model="lastName">
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
			username: "",
			email: "", 
			password: "",
			confirmPassword: "",
			firstName: "",
			lastName: ""

		}
		
	},

	name: "login",

	components: {
		Navbar
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








