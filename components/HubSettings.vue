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
              <tr >

              </tr>


              <tr>
                <td>Bedroom Light</td>
                <td><span class="has-text-danger"><i class="fa fa-trash" aria-hidden="true"></i></span></td>
              </tr>
              <tr>
              </tr><tr>
                <td>Bedroom Box Fan</td>
                <td><span class="has-text-danger"><i class="fa fa-trash" aria-hidden="true"></i></span></td>
              </tr>
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
                <label class="label">Creator</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input" type="text" value="Your Name" readonly="">
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <!-- <label class="label">Owner</label> -->
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <button class="button is-danger">Delete Group</button>
                  </div>
                </div>
              </div>
            </div>
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
