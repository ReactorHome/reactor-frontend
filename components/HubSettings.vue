<template>
  <div id="groupModel" class="modal is-active">
    <div class="modal-background modelClose" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Group Model</p>
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
                    <input class="input" type="text" :value="hub.hubData.name">
                  </p>
                </div>
              </div>
            </div>

            <p class="title text-center">Devices</p>

            <table class="table is-fullwidth is-striped">
              <tbody>
              <tr v-for="device in this.hub.devices" :key="device.id">
                <td>{{ device.name }}</td>
                <td>
                  <span class="icon has-text-success tooltip is-tooltip-bottom" data-tooltip="This device is connected and operating correctly." v-if="device.connected">
                      <i class="fa fa-check-square"></i>
                  </span>
                          <span class="icon has-text-danger tooltip is-tooltip-bottom" data-tooltip="This device is not connected or operating incorrectly." v-if="!device.connected">
                      <i class="fa fa-exclamation-circle"></i>
                  </span>
                </td>
              </tr>


              <!--<tr>-->
                <!--<td>Bedroom Light</td>-->
                <!--<td><span class="has-text-danger"><i class="fa fa-trash" aria-hidden="true"></i></span></td>-->
              <!--</tr>-->
              <!--<tr>-->
              <!--</tr><tr>-->
                <!--<td>Bedroom Box Fan</td>-->
                <!--<td><span class="has-text-danger"><i class="fa fa-trash" aria-hidden="true"></i></span></td>-->
              <!--</tr>-->
              </tbody>
            </table>
          </div>

          <div class="column is-half">

            <p class="title text-center">Details</p>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Created</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="date" value="2017-02-17" readonly="">
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Owner</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label>{{ this.hub.owner.firstName }} {{ this.hub.owner.lastName }} </label>
                  </div>

                </div>
              </div>
            </div>

            <!--<div class="field is-horizontal">-->
              <!--<div class="field-label is-normal">-->
                <!--&lt;!&ndash; <label class="label">Owner</label> &ndash;&gt;-->
              <!--</div>-->
              <!--<div class="field-body">-->
                <!--<div class="field">-->
                  <!--<div class="control">-->
                    <!--<button class="button is-danger">Delete Group</button>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          </div>
        </div>
      </section>

      <footer class="modal-card-foot">
        <button class="button is-success modelClose">Save changes</button>
        <button class="button modelClose" @click="$emit('close')">Cancel</button>
      </footer>

    </div>
  </div>
</template>

<script>

  export default {
    name: "hubSettings",
    props: [
      "hub",
      "isActive"
    ],
    data: function(){
      return {
      }
    },
    methods: {
      closeGroupModel: function(){
        this.isActive = false;
      }
    }
  }
</script>

<style scoped>

</style>
