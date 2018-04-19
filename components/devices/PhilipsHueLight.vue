<template>
  <div>
    <div class="card-content">
      <div class="content">
        <div class="field">
          <input id="switchSmall" type="checkbox" name="switchSmall" class="switch is-small" v-model="this.bulbStateState" @click="this.bulbStateState = !this.bulbStateState">
          <label for="switchSmall" v-if="!this.bulbStateState">Turn on</label>
          <label for="switchSmall" v-if="this.bulbStateState">Turn off</label>
        </div>
        <p>Brightness: {{ device.brightness }}</p>

        <p>Model: {{ device.model }}</p>

        <br />
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Manage Device</a>
    </footer>
  </div>
</template>

<script>

  export default {
    name: "philips-hue-light",
    props: [
      "device"
    ],
    data: function(){
      return{
        bulbStateState: this.device.on,
      }
    },
    methods: {

    }

  }
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
