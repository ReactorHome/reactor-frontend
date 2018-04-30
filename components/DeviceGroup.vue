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

          <div class="field" v-if="deviceGroup.types.includes(0)">
            <input :id="'switchSmall' + deviceGroup.id" type="checkbox" name="switchSmall" class="switch is-small" v-model="onState" @click="updateOnState">
            <label   :for="'switchSmall' + deviceGroup.id" v-if="!onState">Turn on</label>
            <label   :for="'switchSmall' + deviceGroup.id" v-if="onState">Turn off</label>
          </div>


          <div class="field is-horizontal" v-if="deviceGroup.types.includes(1)">
            <div class="field-label is-normal">
              <label class="label">Brightness</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input class="slider is-fullwidth is-success is-circle" step="1" min="0" max="255" v-model="avgBrightness" type="range" @change="updateBrightnessState">
                </p>
              </div>
            </div>
          </div>

          <!--<div class="field is-horizontal" v-if="deviceGroup.types.includes(2)">-->
            <!--<div class="field-label is-normal">-->
              <!--<label class="label">Brightness</label>-->
            <!--</div>-->
            <!--<div class="field-body">-->
              <!--<div class="field">-->
                <!--<p class="control is-expanded">-->
                  <!--<input class="slider is-fullwidth is-success is-circle" step="1" min="0" max="255" v-model="brightness" type="range" @change="updateLightState">-->
                <!--</p>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->

          <!--<div class="field is-horizontal" v-if="deviceGroup.types.includes(3)">-->
            <!--<div class="field-label is-normal">-->
              <!--<label class="label">Brightness</label>-->
            <!--</div>-->
            <!--<div class="field-body">-->
              <!--<div class="field">-->
                <!--<p class="control is-expanded">-->
                  <!--<input class="slider is-fullwidth is-success is-circle" step="1" min="0" max="255" v-model="brightness" type="range" @change="updateLightState">-->
                <!--</p>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->


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
    beforeMount(){
      for(let device of this.deviceGroup.devices){
        if (device.on == false){
          this.onState = false;
          break;
        }
      }
      if(this.deviceGroup.types.includes(3)) {
        for (let device of this.deviceGroup.devices) {
          if (!device.hasOwnProperty('hue') || device.hue == undefined) {
            let index = this.deviceGroup.types.indexOf(3);
              this.deviceGroup.types.splice(index, 1);
              break;
          }
        }
        for (let device of this.deviceGroup.devices){
          this.avgBrightness += device.brightness;
        }
        this.avgBrightness /= this.deviceGroup.devices.length;
        console.log("Avg brightness: " + this.avgBrightness);
      }



    },
    name: "deviceGroup",
    props: [
      "deviceGroup",
      "hub"
    ],
    data: function(){
      return{
        showModal:false,
        onState: true,
        brightness:0,
        avgBrightness:0
      }
    },
    methods:{
      updateOnState:function(){
        this.onState = !this.onState;
        console.log("Onstate now is: " + this.onState);


        this.$parent.axiosInstance.patch(
          "device/api/" + this.hub + "/device-groups/" + this.deviceGroup.id + "/state",
          {
            "on": this.onState,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      },
      updateBrightnessState: function(){

      },
      updateTemperatureState: function(){

      },
      updateHueState: function(){

      },
      updateDataState: function(){

      }
    },
    components:{

    }

  }
  //console.log(this.group);
</script>

<style scoped>
  .switch[type=checkbox]:checked+label::before {
    background-color: #3a97fc;
  }
  .card{
    max-width: 20%;
    min-width:350px;
    height:100%;
  }

  .card-content{
    overflow: hidden;
  }

  .card-content .content{
    overflow: scroll;
  }

  .card-footer{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
