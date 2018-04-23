<template>
  <section class="page-container">
    <nav class="navbar is-primary" role="navigation" aria-label="navigation">
      <a class="navbar-item">
        <p class="navTitle title">Reactor</p>
      </a>

      <div class="navbar-end">
        <a class="navbar-item is-active">
          Dashboard
        </a>

        <a class="navbar-item">
          Supported Devices
        </a>

        <!--<a class="navbar-item">-->
          <!--Account-->
        <!--</a>-->
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Account
          </a>
          <div class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item" @click="userSettingsModal = true">
              User Settings
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" @click="this.logout">
              Logout
            </a>
          </div>
      </div>
      </div>

    </nav>

    <div id="groupModel" class="modal is-active" v-if="this.userSettingsModal == true">
      <div class="modal-background modelClose" @click="userSettingsModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">User Settings</p>
          <button class="delete" aria-label="close" @click="userSettingsModal = false"></button>
        </header>
        <section class="modal-card-body">

          <div class="columns deviceColumns">
            <div class="column is-half">

              <p class="title text-center">Settings</p>

              <!--<div class="field is-horizontal">-->
                <!--<div class="field-label is-normal">-->
                  <!--<label class="label">Name</label>-->
                <!--</div>-->
                <!--<div class="field-body">-->
                  <!--<div class="field">-->
                    <!--<p class="control is-expanded">-->
                      <!--test-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->

              <!--<p class="title text-center">Devices</p>-->

              <!--<table class="table is-fullwidth is-striped">-->
                <!--<tbody>-->
                <!--<tr v-for="device in this.currentHub.devices" :key="device.id">-->
                  <!--<td>{{ device.name }}</td>-->
                  <!--<td>-->
                  <!--<span class="icon has-text-success tooltip is-tooltip-bottom" data-tooltip="This device is connected and operating correctly." v-if="device.connected">-->
                      <!--<i class="fa fa-check-square"></i>-->
                  <!--</span>-->
                    <!--<span class="icon has-text-danger tooltip is-tooltip-bottom" data-tooltip="This device is not connected or operating incorrectly." v-if="!device.connected">-->
                      <!--<i class="fa fa-exclamation-circle"></i>-->
                  <!--</span>-->
                  <!--</td>-->
                <!--</tr>-->


                <!--&lt;!&ndash;<tr>&ndash;&gt;-->
                <!--&lt;!&ndash;<td>Bedroom Light</td>&ndash;&gt;-->
                <!--&lt;!&ndash;<td><span class="has-text-danger"><i class="fa fa-trash" aria-hidden="true"></i></span></td>&ndash;&gt;-->
                <!--&lt;!&ndash;</tr>&ndash;&gt;-->
                <!--&lt;!&ndash;<tr>&ndash;&gt;-->
                <!--&lt;!&ndash;</tr><tr>&ndash;&gt;-->
                <!--&lt;!&ndash;<td>Bedroom Box Fan</td>&ndash;&gt;-->
                <!--&lt;!&ndash;<td><span class="has-text-danger"><i class="fa fa-trash" aria-hidden="true"></i></span></td>&ndash;&gt;-->
                <!--&lt;!&ndash;</tr>&ndash;&gt;-->
                <!--</tbody>-->
              <!--</table>-->
            </div>

            <div class="column is-half">

              <p class="title text-center">Details</p>

              <!--<div class="field is-horizontal">-->
                <!--<div class="field-label is-normal">-->
                  <!--<label class="label">Created</label>-->
                <!--</div>-->
                <!--<div class="field-body">-->
                  <!--<div class="field">-->
                    <!--<p class="control is-expanded">-->
                      <!--<input class="input" type="date" value="2017-02-17" readonly="">-->
                    <!--</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->

              <!--<div class="field is-horizontal">-->
                <!--<div class="field-label is-normal">-->
                  <!--<label class="label">Owner</label>-->
                <!--</div>-->
                <!--<div class="field-body">-->
                  <!--<div class="field">-->
                    <!--<div class="control">-->
                      <!--test-->
                    <!--</div>-->

                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->

              <!--<div class="field is-horizontal">-->
              <!--<div class="field-label is-normal">-->
              <!--&lt;!&ndash; <label class="label">Owner</label> &ndash;&gt;-->
              <!--</div>-->
              <!--<div class="field-body">-->
              <!--<div class="field">-->
              <!--<div class="control">-->
              <!--<button class="button is-danger">Delete Group</button>-->
              <!--</div>-->
              <!--</div>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </div>
        </section>

        <footer class="modal-card-foot">
          <button class="button is-success modelClose" @click="userSettingsModal = false">Save changes</button>
          <button class="button modelClose" @click="userSettingsModal = false">Cancel</button>
        </footer>

      </div>
    </div>




    <div class="sectionWrapper">


      <section id="devices">
        <div class="sectionTitleBar">
          <h3 class="title">Devices</h3>
          <a class="button is-primary">Add Device</a>
        </div>
        <div class="sectionCardWrapper">
          <device v-for="(device, index) in currentHub.devices" :key="index" :device="device" :hub="currentHub.hubData.hubId"></device>
        </div>
      </section>


      <section id="groups">
        <div class="sectionTitleBar">
          <h3 class="title">Groups</h3>
          <a class="button is-primary" @click="showAddDeviceGroupModal = true">Add Group</a>
        </div>
        <add-device-group :devices="currentHub.devices" :hubID="currentHub.hubData.hubId" v-if="showAddDeviceGroupModal" @close="showAddDeviceGroupModal = false"></add-device-group>
        <div class="sectionCardWrapper">
          <!--The first card in the groups will always be the hub group-->
          <!--<group v-for="group in this.groupResults" :key="group.id" :group="group"></group>-->
          <hubGroup :hub="currentHub" v-if="currentHub.hubData != undefined"></hubGroup>
          <device-group v-for="group in currentHub.deviceGroups" :key="group.id" :deviceGroup="group" v-if="currentHub.deviceGroups != undefined"></device-group>
        </div>
      </section>
      <!--<section id="events">-->
        <!--<div class="sectionTitleBar">-->
          <!--<h3 class="title">Events</h3>-->
        <!--</div>-->
        <!--<div id="eventWrapper" v-if="this.currentHub.hasOwnProperty('events')">-->
          <!--<event v-for="event in this.currentHub.events" :key="event.id" :event="event"></event>-->
        <!--</div>-->
      <!--</section>-->

        <!--<section id="alerts">-->
          <!--<div class="sectionTitleBar">-->
            <!--<h3 class="title">Alerts</h3>-->
          <!--</div>-->
          <!--<div id="alertsWrapper" v-if="this.currentHub.hasOwnProperty('alerts')">-->
            <!--<alert v-for="alert in this.currentHub.alerts" :key="alert.id" :alert="alert"></alert>-->
          <!--</div>-->
        <!--</section>-->


    </div>
  </section>
</template>

<script>

import Device from '~/components/Device.vue';
// import Navbar from '~/components/Navbar.vue';
import Group from '~/components/Group.vue';
import HubGroup from '~/components/HubGroup.vue';
import Event from '~/components/Event.vue';
import Alert from '~/components/Alert.vue';
import AddDeviceGroup from '~/components/AddDeviceGroup.vue';
import DeviceGroup from '~/components/DeviceGroup.vue';

const axios = require('axios');
const lodash = require('lodash');

export default {

  name: "home",
  data: function () {
    return {
      userSettingsModal: false,
      groupResults: [],
      bearerToken: "",
      axiosInstance: null,
      hubIds: [],
      currentHub: {},
      hubs:[{
        deviceGroups:[],
        hubData:{},
        devices:[],
        users:[],
        owner:{},
        events:[],
        alerts:[]
      }],
      showAddDeviceGroupModal: false,
    }
  },

  beforeCreate(){

  },
  created() {

  },
  beforeMount() {

  },
  mounted: function() {
    this.retrieveToken();
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
            this.checkBearerToken(this.bearerToken);
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
      .then((response) => {
          console.log(response);
          let result = response.data;
          let currentDT = Date.now();
          let expireTime = currentDT + (result.expires_in * 1000);

          localStorage.accessToken = result.access_token;
          localStorage.expires = expireTime;
          localStorage.refreshToken = result.refresh_token;

          this.bearerToken = result.access_token;

          console.log("Finished getting new token");
          this.checkBearerToken(result.access_token);
      })
      .catch((response) => {
          //handle error
          console.log(response);
        console.log("Could not get a new token!");
        this.logout();
      });
    },
    checkBearerToken: function(token){
      axios.get('https://api.myreactorhome.com/user/oauth/check_token',{
        params: {
          token: token
        }
      })
        .then((response) => {
          console.log(response);
          this.createAxiosInstance();
        })
        .catch((response) => {
          //handle error
          console.log(response);
          console.log("There was an issue with the token!");
          this.logout();
        });
    },
    logout: function(){
      console.log("Logging the user out and resetting localstorage");
      localStorage.accessToken = "";
      localStorage.expires = 0;
      localStorage.refreshToken = "";
      this.$router.push("login");
    },
    getUserGroups: function() {
      this.axiosInstance.get("user/api/users/me/groups")
        .then(response => {
          console.log(response);

          this.getUserGroupsHandler(response.data, response.status);
        })
        .catch(error => {
            console.log(error);
            this.refreshToken();
        });
    },


    //Call other getters from here, current hub is now set
    getUserGroupsHandler: function(result, status) {
      console.log(result.groups);
      this.groupResults = result.groups;
      for(let [index, group] of this.groupResults.entries()){
        console.log("HubID: " + group.hubId);

        this.hubs[index].users = group.accountList;
        this.hubs[index].owner = group.owner;
        this.hubs[index].hubData.hubId = group.hubId;
        this.hubs[index].hubData.hubGroupId = group.id;
        this.hubs[index].hubData.name = group.name;

      }
      this.currentHub = this.hubs[0];
      this.getHubInfo();
      this.getEvents();
      this.getAlerts();
    },
    getHubInfo: function(){
      console.log("Getting Hub information");
      this.axiosInstance.get("device/api/" + this.currentHub.hubData.hubId + "/hub")
        .then(response => {

          console.log(response);
          this.getHubInfoHandler(response.data, response.status);
        })
        .catch(error => {
            console.log(error);
            this.retrieveToken();
        });
    },
    getHubInfoHandler: function(result, status){
      // this.deviceResults = result.devices;
      console.log("Adding devices to the master list");
      this.currentHub.devices = result.devices;
      console.log(this.currentHub.devices);

      this.currentHub.deviceGroups = result.device_groups;


      // this.groupResults[0].devices = this.deviceResults;
      // console.log(this.deviceResults);
    },
    getEvents: function(){
      this.axiosInstance.get("user/api/events/" + this.currentHub.hubData.hubGroupId)
        .then(response => {
          console.log(response);
          this.getEventsHandler(response.data, response.status);
        })
        .catch(error => {
          console.log(error);
          this.retrieveToken();
        });
    },
    getEventsHandler: function(result, status){
      this.currentHub.events = result.events.reverse();
    },
    getAlerts: function(){
      this.axiosInstance.get("user/api/alerts/" + this.currentHub.hubData.hubGroupId)
        .then(response => {
          console.log(response);
          this.getAlertsHandler(response.data, response.status);
        })
        .catch(error => {
          console.log(error);
          this.retrieveToken();
        });
    },
    getAlertsHandler: function(result,status){
      this.currentHub.alerts = result.alerts.reverse();
      console.log("Alert handler");
    }

  },
  components: {
    Device,
    AddDeviceGroup,
    Group,
    HubGroup,
    Event,
    Alert,
    DeviceGroup

  }
}
</script>

<style scoped>
  .navTitle{
    font-style: italic;
    font-weight: 200;
  }
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

  .sectionCardWrapper .card-container{
    height:100%;
    padding: 10px;
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

  #events, #alerts{
    height:20%;
  }

  #eventWrapper, #alertsWrapper{
    display:flex;
    flex-flow:row;
    overflow-x: scroll;
  }
</style>
