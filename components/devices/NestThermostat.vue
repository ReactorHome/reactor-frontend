<template>
  <div>
    <div class="card-content">
      <div class="content">
        <div class="field">
          <input :id="'switchSmall' + device.id" type="checkbox" name="switchSmall" class="switch is-small" v-model="bulbState" @click="changeAndUpdateBulbState">
          <label  :for="'switchSmall' + device.id" v-if="!bulbState">Turn on</label>
          <label  :for="'switchSmall' + device.id" v-if="bulbState">Turn off</label>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Brightness</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="slider is-fullwidth is-success is-circle" step="1" min="0" max="100" v-model="device.brightness" type="range" @change="updateLightState">
              </p>
            </div>
          </div>
        </div>
        <p>Model: {{ device.model }}</p>
        <br />
      </div>
    </div>
    <footer class="card-footer" @click="showModal = true">
      <a href="#" class="card-footer-item">Manage Device</a>
    </footer>

    <philips-hue-light-settings :device="device" :hub="hub" v-if="showModal" @close="showModal = false" @changeState="buldState = !bulbState"></philips-hue-light-settings>

  </div>
</template>

<script>

  import PhilipsHueLightSettings from "./deviceSettings/PhilipsHueLightSettings";

  export default {
    components: {PhilipsHueLightSettings},
    name: "nest-thermostat",
    props: [
      "device",
      "hub"
    ],
    data: function(){
      return{
        bulbState: this.device.on,
        showModal: false
      }
    },
    methods: {
      changeAndUpdateBulbState: function(){
        this.changeBulbState();
        this.updateLightState();
      },
      changeBulbState: function(){
        this.bulbState = !this.bulbState;
      },
      updateLightState: function(){
        this.$parent.$parent.axiosInstance.patch(
          "device/api/" + this.hub + "/light/",
          {
            "hardware_id": this.device.hardware_id,
            "on": this.bulbState,
            "type": 0,
            "brightness": this.device.brightness
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
