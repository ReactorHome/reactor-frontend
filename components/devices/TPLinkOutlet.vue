<template>
    <div>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <input :id="'switchSmall' + device.id" type="checkbox" :name="'switchSmall' + device.id" class="switch is-small" v-model="outletState" @click="changeAndUpdatestate">
            <label :for="'switchSmall' + device.id" v-if="!outletState">Turn on</label>
            <label :for="'switchSmall' + device.id" v-if="outletState">Turn off</label>
          </div>
          <p>Model: {{ device.model }}</p>

          <br />
        </div>
      </div>
      <footer class="card-footer" @click="showModal = true">
        <a href="#" class="card-footer-item">Manage Device</a>
      </footer>

      <tp-link-outlet-settings :device="device" :hub="hub" v-if="showModal" @close="showModal = false" @changeState="changeOutletState"></tp-link-outlet-settings>

    </div>
</template>

<script>

  import TpLinkOutletSettings from "./deviceSettings/TPLinkOutletSettings.vue";

  export default {
    components: {TpLinkOutletSettings},
    name: "tp-link-outlet",
    props: [
      "device",
      "hub"
    ],
    data: function(){
      return{
        outletState: this.device.on,
        showModal: false
      }
    },
    methods: {
      changeOutletState: function(){
        this.outletState = !this.outletState;
      },
      changeAndUpdatestate: function(){
        this.changeOutletState();
        this.updateOutletState();
      },
      updateOutletState: function(){
        this.$parent.$parent.axiosInstance.patch(
          "device/api/" + this.hub + "/outlet/",
          {
            "hardware_id": this.device.hardware_id,
            "on": this.outletState,
            "type": 1,
            "name": this.device.name
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
      closeModal: function(){
        this.showModal = false;
      },
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
