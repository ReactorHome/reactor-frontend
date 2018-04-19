<template>
    <div>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <input :id="'switchSmall' + device.id" type="checkbox" :name="'switchSmall' + device.id" class="switch is-small" v-model="outletState" @click="outletState = !outletState">
            <label :for="'switchSmall' + device.id" v-if="!outletState">Turn on</label>
            <label :for="'switchSmall' + device.id" v-if="outletState">Turn off</label>
          </div>
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
    name: "tp-link-outlet",
    props: [
      "device"
    ],
    data: function(){
      return{
        outletState: this.device.on,
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
