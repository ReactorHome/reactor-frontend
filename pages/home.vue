<template>
  <section class="page-container">
    <Navbar></Navbar>
    <div class="sectionWrapper">


      <section id="devices">
        <div class="sectionTitleBar">
          <h3 class="title">Devices</h3>
          <a class="button is-primary">Add Device</a>
        </div>
        <div class="sectionCardWrapper">
          <device></device>
          <device></device>
          <device></device>
        </div>
      </section>

      
      <section id="groups">
        <div class="sectionTitleBar">
          <h3 class="title">Groups</h3>
          <a class="button is-primary">Add Group</a>
        </div>
        <div class="sectionCardWrapper">
          <group></group>
        </div>
      </section>
      <section id="events">
        <div class="sectionTitleBar">
          <h3 class="title">Events</h3>
        </div>
        <div class="eventWrapper">
          <alert type="warning">
            <p slot="body">This is some text for a sample body. I hope Reiker likes the work that I've done</p>
          </alert>
          <alert type="danger">
            <p slot="body">This is some text for a sample body. I hope Reiker likes the work that I've done</p>
          </alert>
          <alert type="none">
            <p slot="body">This is some text for a sample body. I hope Reiker likes the work that I've done</p>
          </alert>
        </div>
      </section>
    </div>
  </section>
</template>

<script>

import Device from '~/components/Device.vue';
import Navbar from '~/components/Navbar.vue';
import Alert from '~/components/Alert.vue';
import Group from '~/components/Group.vue';

export default {
  
  name: "home",
  data: function(){
    groupResults: []
  },


  created() {
    
  },
  beforeMount() {


    //Getting data from local storage

    if(typeof(Storage) !== "undefined"){
      if(localStorage.refreshToken){
        if(Number(localStorage.expires) >= Date.now()){
          //REFRESH THE TOKEN
        }
        const token = localStorage.accessToken;
        this.getUserGroups(token);
      }else{
        this.$router.push("login");
      }
    }


    // const token = this.getCookie("token");

    // if (token === "" || !token) {
    //   this.$router.push("login");
    // } else {
    //   //this.getGroupInfo("token");
    //   this.getUserGroups("token");
    // }
  },
  mounted: function() {

  },
  methods: {
    // getCookie: function(cname) {
    //   let name = cname + "=";
    //   let decodedCookie = decodeURIComponent(document.cookie);
    //   let ca = decodedCookie.split(',');
    //   for(let i = 0; i <ca.length; i++) {
    //     let c = ca[i];
    //     while (c.charAt(0) == ' ') {
    //       c = c.substring(1);
    //     }
    //     if (c.indexOf(name) == 0) {
    //       return c.substring(name.length, c.length);
    //     }
    //   }
    //   return "";
    // },
    getGroupInfo: function(token) {
      $.ajax({
        url: "https://api.myreactorhome.com/user/api/groups/1",
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', "Bearer " + token);},
        success: this.getGroupInfoHandler,
        failure: console.log("Couldnt get group info")
      });
    },
    getUserGroups: function(token) {
      $.ajax({
        url: "https://api.myreactorhome.com/user/api/users/me/groups",
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', "Bearer " + token);},
        success: this.getUserGroupsHandler,
        failure: console.log("Couldnt get group info")
      });
    },
    getHubInfo: function(token){


    },
    getGroupInfoHandler: function(result, status) {
      console.log(status);
      
    },
    getUserGroupsHandler: function(result, status) {
      console.log(status);
      console.log(result);
      let groups = result.groups;
      for(let group of groups){
        console.log(group);
        console.log("Group Owner ID: " + group.owner.email);
      }

      this.groupResults = result.groups;



    },
    refreshAuthToken(refreshToken){

    }
  },
  components: {
    Device,
    Navbar,
    Alert,
    Group
  }
}
</script>

<style scoped>
  .sectionTitleBar{
    display: flex;
    flex-flow:row;
  }

  .sectionTitleBar .title{
    margin-bottom: 10px;
  }

  .sectionTitleBar .button{
    margin-left:20px;
  }

  .sectionWrapper{
    position: absolute;
    top: 52px;
    bottom: 0;
    width:100vw;
    min-height:900px;
    overflow:scroll;
    padding:25px;
    display: flex;
    flex-direction: column;

  }

  .sectionWrapper section{
    height:40%;
    position:relative;
  }

  .sectionWrapper section:last-child{
    height:20%;
  }

  .sectionCardWrapper{
    display:flex;
    flex-flow:row;
    overflow-x: scroll;
    position:absolute;
    top:46px;
    bottom:0;
    right: 0;
    left:0;
  }

  .eventWrapper{
    display:flex;
    flex-flow:row;
  }
</style>
