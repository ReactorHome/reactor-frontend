<template>
  <section class="card-container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ deviceGroup.name }}
        </p>
        <p class="card-header-icon" aria-label="more options">
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <p>Type: Devices</p>

          <p>Devices: {{ deviceGroup.devices.length }}</p>

          <br />

        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="showModal = true">Manage Group</a>
      </footer>
    </div>
    <!--<hubSettings :hub="hub" v-if="showModal" @close="showModal = false"></hubSettings>-->

  </section>


</template>

<script>

  export default {
    name: "deviceGroup",
    props: [
      "deviceGroup"
    ],
    data: function(){
      return{
        showModal:false
      }
    },
    components:{

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
