<template>
  <div id="addDeviceGroupModal" class="modal is-active">
    <div class="modal-background modelClose" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create Group of Devices</p>
        <button class="delete reactor-class" aria-label="close" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">
        <div class="columns deviceColumns">
          <div class="column is-half">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Name</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" v-model="groupName">
                  </p>
                </div>
              </div>
            </div>
            <br>
            <p class="title text-center">Available Devices</p>
            <table class="table is-hoverable is-striped is-fullwidth">
              <tr>
                <th>Device Name</th>
                <th>Model</th>
              </tr>
              <tr v-for="device in devicesCopy" :key="device.hardware_id"  @click="addDevice(device)">
                <td>{{ device.name }}</td>
                <td>{{ device.model }}</td>
              </tr>
            </table>
          </div>
          <div class="column is-half">
            <p class="title text-center">Devices Assigned</p>
            <table class="table is-hoverable is-striped is-fullwidth">
              <tr>
                <th>Device Name</th>
                <th>Model</th>
              </tr>
              <tr v-for="device in devicesToAdd" :key="device.hardware_id"  @click="removeDevice(device)">
                <td>{{ device.name }}</td>
                <td>{{ device.model }}</td>
              </tr>
            </table>

          </div>
        </div>


      </section>

      <footer class="modal-card-foot">
        <button class="button is-success modelClose reactor-class" @click="saveGroup">Save changes</button>
        <button class="button modelClose reactor-class is-success" @click="$emit('close')">Cancel</button>
      </footer>

    </div>
  </div>
</template>

<script>

  export default {
    name: "addDeviceGroup",
    props: [
      "devices",
      "hubID"
    ],
    data: function(){
      return {
        devicesToAdd:[],
        // addedToDeviceGroup: false,
        devicesCopy: [],
        groupName:"",
      }
    },
    mounted(){
      this.devicesCopy = this.devices.slice();
    },
    methods: {
      addDevice: function(device){

        console.log("Adding a device");
        this.devicesToAdd.push(device);
        // device.addedToDeviceGroup = true;
        let index = this.devicesCopy.indexOf(device);
        console.log(index);
        this.devicesCopy.splice(index,1);
      },
      removeDevice: function(device){

        console.log("Removing a device");
        this.devicesCopy.push(device);
        // device.addedToDeviceGroup = true;
        let index = this.devicesToAdd.indexOf(device);
        this.devicesToAdd.splice(index,1);
      },
      saveGroup:function(){
        this.$parent.axiosInstance.post(
          "device/api/" + this.hubID + "/device-groups",
          {
            "name": this.groupName,
            "devices": this.devicesToAdd,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
          .then(response => {
            console.log(response);
            this.$emit('close');
            this.$emit('refreshGroups');
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>
.modal-card{
  width:1000px;
}
</style>
