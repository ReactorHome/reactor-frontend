<template>
  <div>
    <div class="card-content">
      <div class="content">
        <div class="field">
          <input :id="'switchSmall' + device.id" type="checkbox" name="switchSmall" class="switch is-small" v-model="bulbState" @click="changeLightState">
          <label  :for="'switchSmall' + device.id" v-if="!bulbState">Turn on</label>
          <label  :for="'switchSmall' + device.id" v-if="bulbState">Turn off</label>
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
      "device",
      "hub"
    ],
    data: function(){
      return{
        bulbState: this.device.on,
      }
    },
    methods: {
      changeLightState: function(){
        this.bulbState = !this.bulbState;

        this.$parent.$parent.axiosInstance.patch(
          "device/api/" + this.hub + "/light/",
          {
            "hardware_id": this.device.hardware_id,
            "on": this.bulbState,
            "type": 0
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
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
