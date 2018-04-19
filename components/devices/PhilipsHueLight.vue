<template>
  <div>
    <div class="card-content">
      <div class="content">
        <div class="field">
          <input :id="'switchSmall' + device.id" type="checkbox" name="switchSmall" class="switch is-small" v-model="bulbStateState" @click="bulbStateState = !bulbStateState">
          <label  :for="'switchSmall' + device.id" v-if="!bulbStateState">Turn on</label>
          <label  :for="'switchSmall' + device.id" v-if="bulbStateState">Turn off</label>
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
