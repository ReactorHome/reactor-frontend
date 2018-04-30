<template>
  <section class="alert-container" v-if="alert.hasOwnProperty('dataJson') && alert.dataJson == undefined">
    <article class="message is-danger">
      <div class="message-body">
        <slot name="body"> {{ this.alert.data }} </slot>
      </div>
    </article>
  </section>
</template>

<script>

export default {
  name: "alert",
  props: ["alert"],
  components: {

  },
  data: function() {
    return {

    }
  },
  mounted: function() {

  }
}
</script>

<style scoped>
  article{
    margin:0px 5px;
    max-width: 400px;
    min-width: 200px;
    height:100%;
  }
  .message-body{
    height:100%;
  }
</style>
