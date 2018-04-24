<template>
  <section class="card-container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ hub.hubData.name }}
        </p>
        <p class="card-header-icon" aria-label="more options">

          <!--<span class="icon has-text-success" v-if="group.events.length == 0 && group.alerts.length == 0">-->
            <!--<i class="fa fa-check-square"></i>-->
          <!--</span>-->

          <!--<span class="icon has-text-warning" v-if="group.events.length >= 1 && group.alerts.length == 0">-->
            <!--<i class="fa fa-exclamation-triangle"></i>-->
          <!--</span>-->

          <!--<span class="icon has-text-danger" v-if="group.alerts.length >= 1">-->
            <!--<i class="fa fa-exclamation-circle"></i>-->
          <!--</span>-->
        </p>
      </header>
      <div class="card-content">
      <div class="content">
        <p>Type: Hub</p>
        <p>Owner: {{ hub.owner.firstName }} {{ hub.owner.lastName }}</p>
        <p>Users: {{ hub.users.length + 1 }}</p>
        <p>Devices: {{ hub.devices.length }}</p>

        <br />

        <!--<button class="button is-danger">View Alert</button>-->
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item" @click="showModal = true">Manage Group</a>
    </footer>
  </div>
    <hubSettings :hub="hub" v-if="showModal" @close="showModal = false"></hubSettings>

  </section>


</template>

<script>
  import HubSettings from '~/components/HubSettings.vue';

export default {
  name: "hubGroup",
  props: [
    "hub"
  ],
  data: function(){
    return{
      showModal:false
    }
  },
  components:{
    HubSettings
  }

}
//console.log(this.group);
</script>

<style scoped>
  .card{
    max-width: 20%;
    min-width:350px;
    height:100%;
  }

  .card-content{
    overflow: hidden;
  }

  .card-footer{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
