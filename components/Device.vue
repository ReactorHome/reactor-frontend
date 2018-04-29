<template>
  <section class="card-container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ device.name }}
        </p>
        <p class="card-header-icon" aria-label="more options" v-if="device.hasOwnProperty('connected')">
          <span class="icon has-text-success tooltip is-tooltip-bottom" data-tooltip="This device is connected and operating correctly." v-if="device.connected">
              <i class="fa fa-check-square"></i>
          </span>
          <span class="icon has-text-danger tooltip is-tooltip-bottom" data-tooltip="This device is not connected or operating incorrectly." v-if="!device.connected">
              <i class="fa fa-exclamation-circle"></i>
          </span>
        </p>
        <p class="card-header-icon" aria-label="more options" v-if="device.hasOwnProperty('hvac_mode')">
          <span class="icon has-text-success tooltip is-tooltip-bottom" data-tooltip="This device operating in ECO Mode." v-if="device.connected">
              <i class="fa fa-leaf"></i>
          </span>
          <span class="icon has-text-danger tooltip is-tooltip-bottom" data-tooltip="This device is not operating in ECO Mode" v-if="!device.connected">
              <i class="fa fa-leaf"></i>
          </span>
        </p>

      </header>
      <tp-link-outlet v-if="device.model == 'HS105(US)'" :device="device" :hub="hub"></tp-link-outlet>
      <philips-hue-light v-if="device.model == 'LWB014'" :device="device" :hub="hub"></philips-hue-light>
      <nest-thermostat v-if="device.hasOwnProperty('hvac_mode')" :device="device" :hub="hub"></nest-thermostat>

  </div>
  </section>
</template>

<script>

  import PhilipsHueLight from './devices/PhilipsHueLight.vue';
  import TpLinkOutlet from "./devices/TPLinkOutlet";
  import NestThermostat from './devices/NestThermostat';

export default {
  name: "device",
  props: [
    "device",
    "hub"
  ],
  data: function(){
    return{

    }
  },
  methods: {

  },
  components: {
    TpLinkOutlet,
    PhilipsHueLight,
    NestThermostat,
  }

}
</script>

<style scoped>
  .has-text-success {
      color: #3a97fc !important;
  }
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
