<template>
  <section class="card-container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ group.name }}
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
        <p><b>Owner:</b> {{ group.owner.username }}</p>
        <!--<p><b>Events:</b> {{ group.events.length }}</p>-->

        <br />

        <button class="button is-danger">View Alert</button>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Manage Group</a>
    </footer>
  </div>
  </section>
</template>

<script>

export default {
  name: "group",
  props: [
    "group"
  ],

}
//console.log(this.group);
</script>

<style scoped>
  .card{
    max-width: 20%;
    min-width:350px;
    margin:10px;
    height:auto;
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
