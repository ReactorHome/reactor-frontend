<template>
  <section class="card-container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ device.name }}
        </p>
        <p class="card-header-icon" aria-label="more options">
          <span class="icon has-text-success tooltip is-tooltip-bottom" data-tooltip="This device is connected and operating correctly." v-if="device.connected">
              <i class="fa fa-check-square"></i>
          </span>
          <span class="icon has-text-danger tooltip is-tooltip-bottom" data-tooltip="This device is not connected or operating incorrectly." v-if="!device.connected">
              <i class="fa fa-exclamation-circle"></i>
          </span>
        </p>
      </header>
      <div class="card-content">
      <div class="content">
        <div class="field">
          <input id="switchSmall" type="checkbox" name="switchSmall" class="switch is-small" v-model="this.outletState" v-on:click="this.outletStateHandler">
          <label for="switchSmall" v-if="!this.outletState">Turn on</label>
          <label for="switchSmall" v-if="this.outletState">Turn off</label>
        </div>
        <p>Model: {{ device.model }}</p>

        <br />

        <!--<button class="button is-danger">View Alert</button>-->
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Manage Device</a>
    </footer>
  </div>
  </section>
</template>

<script>

export default {
  name: "device",
  props: [
    "device",
    "hub"
  ],
  data: function(){
    return{
      outletState: this.device.on
    }
  },
  methods: {
    outletStateHandler: function () {
      console.log(this);
      console.log(this.outletState);
      this.outletState = !this.outletState;
      console.log(this.outletState);

      // if (this.outletState) {
      //   this.outletState = false;
      // } else {
      //   this.outletState = true;
      // }

      // this.$parent.axiosInstance.patch(
      //   "device/api/" + this.hubId + "/outlet/",
      //   {
      //     "hardware_id": this.device.hardware_id,
      //     "type": 1,
      //     "on": this.outletState
      //   }
      // )
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });

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
