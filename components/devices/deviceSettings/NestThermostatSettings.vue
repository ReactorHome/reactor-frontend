<template>
  <div id="groupModel" class="modal is-active">
    <div class="modal-background modelClose" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ device.name }} Settings</p>
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">

        <div class="columns deviceColumns">
          <div class="column is-half">

            <p class="title text-center">Settings</p>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Name</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" :value="device.name">
                  </p>
                </div>
              </div>
            </div>

            <p><b>Mode:</b> {{ device.hvac_mode }}</p>
            <!--<p><b>Target: </b> {{ device.target_temperature_f }} &#176;</p>-->

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Temp.</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input class="slider is-fullwidth is-success is-circle" step="1" min="0" max="255" v-model="device.target_temperature_f" type="range">
                  </p>
                </div>
              </div>
            </div>

            <!--<div class="field is-horizontal">-->
              <!--<div class="field-label is-normal">-->
                <!--<label class="label">State</label>-->
              <!--</div>-->
              <!--<div class="field-body">-->
                <!--<div class="field">-->
                  <!--<p class="control is-expanded">-->
                    <!--<input :id="'settingsSwitchSmall' + device.id" type="checkbox" :name="'settingsSwitchSmall' + device.id" class="switch is-small" v-model="$parent.bulbState" @click="device.on = !device.on">-->
                    <!--<label :for="'settingsSwitchSmall' + device.id" v-if="!device.on">Turn on</label>-->
                    <!--<label :for="'settingsSwitchSmall' + device.id" v-if="device.on">Turn off</label>-->
                  <!--</p>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          </div>

          <div class="column is-half">

            <p class="title text-center">Details</p>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Manufacturer</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    Nest
                  </p>
                </div>
              </div>
            </div>

            <!--<div class="field is-horizontal">-->
              <!--<div class="field-label is-normal">-->
                <!--<label class="label">Model</label>-->
              <!--</div>-->
              <!--<div class="field-body">-->
                <!--<div class="field">-->
                  <!--<p class="control is-expanded">-->
                    <!--{{ device.model }}-->
                  <!--</p>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Can Heat</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    True
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Can Cool</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    True
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success modelClose" @click="updateParentDevice">Save changes</button>
        <button class="button modelClose" @click="$emit('close')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>

  export default {
    name: "nest-settings",
    props: [
      "device",
      "hub"
    ],
    data: function(){
      return {
        // showModal:false
      }
    },
    methods: {
      updateParentDevice: function(){
        this.$parent.device = this.device;
        this.$parent.updateLightState();
      },
    }
  }
</script>

<style scoped>
  .modal-card{
    width:1000px;
  }
</style>
