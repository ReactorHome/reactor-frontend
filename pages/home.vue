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
          <device v-for="device in this.deviceResults" :key="device.id" :device="device"></device>
        </div>
      </section>


      <section id="groups">
        <div class="sectionTitleBar">
          <h3 class="title">Groups</h3>
          <a class="button is-primary">Add Group</a>
        </div>
        <div class="sectionCardWrapper">
          <group v-for="group in this.groupResults" :key="group.id" :group="group"></group>
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

const axios = require('axios');
const lodash = require('lodash');

export default {

  name: "home",
  data: function () {
    return {
      groupResults: [],
      deviceResults: [],
      bearerToken: "",
      axiosInstance: null,
      hubIds: []
    }
  },

  beforeCreate(){

  },
  created() {

  },
  beforeMount() {
    this.retrieveToken();
  },
  mounted: function() {

  },
  methods: {
    createAxiosInstance: function(){
      this.axiosInstance = axios.create({
        baseURL: 'https://api.myreactorhome.com/',
        timeout: 1000,
        headers: {'Authorization' : "Bearer " + this.bearerToken}
      });
      this.getUserGroups();
    },
    retrieveToken: function(){
      if (typeof(Storage) !== "undefined") {
        if (localStorage.refreshToken) {
          if (Number(localStorage.expires) <= Date.now()) {
            this.refreshToken()
          }else{
            this.bearerToken = localStorage.accessToken;
            console.log("Finished getting token");
            this.createAxiosInstance();
          }
        }
      } else {
        this.$router.push("login");
      }
    },
    refreshToken: function(){
      console.log("Getting new token");
      let bodyFormData = new FormData();
      const token = localStorage.refreshToken;
      bodyFormData.append('grant_type', 'refresh_token');
      bodyFormData.append('client_id', 'api-user');
      bodyFormData.append('refresh_token', token);
      axios({
        method: 'post',
        url: 'https://api.myreactorhome.com/user/oauth/token',
        data: bodyFormData,
        config: {headers: {'Content-Type': 'multipart/form-data'}}
      })
        .then(function (response) {
          console.log(response);
          let result = response.data;
          let currentDT = Date.now();
          let expireTime = currentDT + result.expires_in;

          localStorage.accessToken = result.access_token;
          localStorage.expires = expireTime;
          localStorage.refreshToken = result.refresh_token;
          console.log("Finished getting token");
          this.createAxiosInstance();
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    },


    getGroupInfo: function(token) {
      $.ajax({
        url: "https://api.myreactorhome.com/user/api/groups/1",
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', "Bearer " + token);},
        success: this.getGroupInfoHandler,
        failure: console.log("Couldnt get group info")
      });
    },
    getUserGroups: function() {
      this.axiosInstance.get("user/api/users/me/groups")
        .then(response => {
          console.log(response);
          this.getUserGroupsHandler(response.data, response.status);
        })
        .catch(error => {
            console.log(error);
        });
    },
    getUserGroupsHandler: function(result, status) {
      console.log(result.groups);
      this.groupResults = result.groups;
      for(let group of this.groupResults){
        console.log("HubID: " + group.hubId);

        if(this.hubIds.length == 0 || !this.hubIds.find(groups.hubId)){
          this.hubIds.push(group.hubId);
        }
      }
      this.getHubInfo(this.hubIds[0]);
    },
    getHubInfo: function(hubID){
      this.axiosInstance.get("device/api/" + hubID + "/hub")
        .then(response => {
          console.log(response);
          this.getHubInfoHandler(response.data, response.status);
        })
        .catch(error => {
            console.log(error);
        });
    },
    getHubInfoHandler: function(result, status){
      this.deviceResults = result.devices;
      console.log(this.deviceResults);
    },



    getGroupInfoHandler: function(result, status) {
      console.log(status);

    },

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
