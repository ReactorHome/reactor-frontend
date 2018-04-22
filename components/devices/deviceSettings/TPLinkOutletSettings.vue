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
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">State</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input :id="'switchSmall' + device.id" type="checkbox" :name="'switchSmall' + device.id" class="switch is-small" v-model="$parent.outletState" @click="emit('changeState')">
                    <label :for="'switchSmall' + device.id" v-if="!$parent.outletState">Turn on</label>
                    <label :for="'switchSmall' + device.id" v-if="$parent.outletState">Turn off</label>
                  </p>
                </div>
              </div>
            </div>
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
                    {{ device.manufacturer }}
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Model</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    {{ device.model }}
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Address</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    {{ device.connection_address }}
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success modelClose" @click="$emit('close')">Save changes</button>
        <button class="button modelClose" @click="$emit('close')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>

  export default {
    name: "tp-link-outlet-settings",
    props: [
      "device",
      "hub"
    ],
    data: function(){
      return {
        showModal:false
      }
    },
    methods: {
      save: function(){
        // this.$parent.device = this.device;
        // this.emit('updateOutletState');
      },
    }
  }
</script>

<style scoped>

</style>
