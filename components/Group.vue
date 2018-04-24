<template>
  <section class="card-container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ group.name }}
        </p>
        <p class="card-header-icon" aria-label="more options">

        </p>
      </header>
      <div class="card-content">
      <div class="content">
        <p>Type: Hub</p>
        <p><b>Owner:</b> {{ group.owner.firstName }} {{ group.owner.lastName }}</p>
        <p>Users: {{ group.accountList.length + 1 }}</p>
        <!--<p><b>Events:</b> {{ group.events.length }}</p>-->



        <br />

        <button class="button is-danger">View Alert</button>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item" @click="showModal = true">Manage Group</a>
    </footer>
  </div>
    <groupSettings :group="group" v-if="showModal" @close="showModal = false"></groupSettings>
  </section>


</template>

<script>
  import GroupSettings from '~/components/GroupSettings.vue';

export default {
  name: "group",
  props: [
    "group"
  ],
  data: function(){
    return{
      showModal:false
    }
  },
  components:{
    GroupSettings
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
