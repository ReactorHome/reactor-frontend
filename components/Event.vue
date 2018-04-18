<template>
  <section class="alert-container" v-if="event.hasOwnProperty('json') && event.json == undefined">
    <article class="message is-warning">
      <div class="message-body">
        <p slot="body"><b>{{ this.event.device }}</b></p>
        <p slot="body">{{ this.time }}</p>
      </div>
    </article>
  </section>
</template>

<script>

  export default {
    name: "event",
    props: [
      "event"
    ],
    data: function(){
      return{
        time: this.convertTime() ,
      }
    },
    methods: {
      convertTime: function(){
        var newDate = new Date();
        newDate.setTime(this.event.occurredAt*1000);
        let dateString = newDate.toUTCString();
        return dateString;
      }
    },

  }
</script>

<style scoped>

  section .alert-container{
    min-width: 200px;
    width:auto;
    margin-right:20px;
  }

</style>
