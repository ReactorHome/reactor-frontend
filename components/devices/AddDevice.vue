<template>
  <div id="groupModel" class="modal is-active">
    <div class="modal-background modelClose" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add a New Device</p>
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">

        <p class="title">Nest Thermostat</p>
        <p>To add a Nest to you account, please click the button below, log into your Nest account and then copy the access code into the test box below.</p>

        <div class="field is-horizontal is-grouped-centered">
          <div class="field-label is-normal">
            <a href="https://home.nest.com/login/oauth2?client_id=3223d9c8-257a-464c-b16a-df65efe49674&state=STATE" target="_blank">
              <button class="button is-primary reactor-class">Go to Nest Account</button>
            </a>
          </div>
          <div class="field-body is-normal" id="pushDown">
            <div class="field has-addons has-addons-right">
              <p class="control">
                <input class="input" type="text" placeholder="Nest Code">
              </p>
              <p class="control">
                <a class="button is-primary reactor-class" @click="$emit('close')">
                  Submit
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr>

        <p class="title">Philips Hue Lights</p>
        <p>To add a new Hue Bridge, press the button on the top of the Hue Bridge so put it into 'Discover' mode. When your Reactor hub successfully connected to the new bridge your account will receive a notification</p>

        <!--<div class="field is-horizontal is-grouped-centered">-->
          <!--<div class="field-label is-normal">-->
            <!--<button class="button button-is-primary">Go to Nest Account</button>-->
          <!--</div>-->
          <!--<div class="field-body is-normal" id="pushDown">-->
            <!--<div class="field">-->
              <!--<p class="control">-->
                <!--<input class="input" type="text" placeholder="Nest Code">-->
              <!--</p>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->


      </section>
      <footer class="modal-card-foot">
        <!--<button class="button is-success modelClose">Save changes</button>-->
        <button class="button modelClose" @click="$emit('close')">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>

  export default {
    name: "add-device",
    props: [
    ],
    data: function(){
      return {
        showModal:false
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .modal-card{
    width:1000px;
  }
  #pushDown{
    padding-top:6px;
  }
</style>
