<template>
  <div id="groupModel" class="modal is-active">
    <div class="modal-background modelClose" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Events and Alerts</p>
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">

        <p class="title">Events</p>

          <div id="eventWrapper" v-if="this.currentHub.hasOwnProperty('events')">
            <event v-for="event in currentHub.events" :key="event.id" :event="event"></event>
          </div>

        <hr>

        <p class="title">Alerts</p>

        <div id="alertsWrapper" v-if="this.currentHub.hasOwnProperty('alerts')">
          <alert v-for="alert in currentHub.alerts" :key="alert.id" :alert="alert"></alert>
        </div>


        <!--<div class="field is-horizontal is-grouped-centered">-->
        <!--<div class="field-label is-normal">-->
        <!--<button class="button button-is-primary">Go to Nest Account</button>-->
        <!--</div>-->
        <!--<div class="field-body is-normal" id="pushDown">-->
        <!--<div class="field">-->
        <!--<p class="control">-->
        <!--<input class="input" type="text" placeholder="Nest Code">-->
        <!--</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->


      </section>
      <footer class="modal-card-foot">
        <!--<button class="button is-success modelClose">Save changes</button>-->
        <button class="button modelClose" @click="$emit('close')">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>

  import Event from '~/components/Event.vue';
  import Alert from '~/components/Alert.vue';

  export default {
    name: "events-and-alerts",
    props: [
      'currentHub'
    ],
    data: function(){
      return {
        showModal:false
      }
    },
    methods: {

    },
    components:{
      Event,
      Alert
    }
  }
</script>

<style scoped>
  .modal-card{
    width:1000px;
  }
  #pushDown{
    padding-top:6px;
  }

  #events, #alerts{
    /*height:20%;*/
  }

  #eventWrapper, #alertsWrapper{
    display:flex;
    flex-flow:row;
    overflow-x: scroll;
  }
</style>
