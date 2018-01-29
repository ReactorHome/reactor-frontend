<template>
  <section class="page-container">
    <Navbar></Navbar>
    <div class="sectionWrapper">
      <section id="devices">
        <div class="sectionTitleBar">
          <h3 class="title">Devices</h3>
          <a class="button is-primary">Add Device</a>
        </div>
        <div class="sectionCardWrapper">
          <device></device>
          <device></device>
          <device></device>
        </div>
      </section>
      <section id="groups">
        <div class="sectionTitleBar">
          <h3 class="title">Groups</h3>
          <a class="button is-primary">Add Group</a>
        </div>
        <div class="sectionCardWrapper">
          <device></device>
          <device></device>
          <device></device>
        </div>
      </section>
      <section id="events">
        <div class="sectionTitleBar">
          <h3 class="title">Events</h3>
        </div>
        <div class="eventWrapper">
          <alert type="warning">
            <p slot="body">This is some text for a sample body. I hope Reiker likes the work that I've done</p>
          </alert>
          <alert type="danger">
            <p slot="body">This is some text for a sample body. I hope Reiker likes the work that I've done</p>
          </alert>
          <alert type="none">
            <p slot="body">This is some text for a sample body. I hope Reiker likes the work that I've done</p>
          </alert>
        </div>
      </section>
    </div>
  </section>
</template>

<script>

import Device from '~/components/Device.vue';
import Navbar from '~/components/Navbar.vue';
import Alert from '~/components/Alert.vue';

export default {
  

  name: "home",
  components: {
    Device,
    Navbar,
    Alert
  }
}
</script>

<style scoped>
  .sectionTitleBar{
    display: flex;
    flex-flow:row;
  }

  .sectionTitleBar .title{
    margin-bottom: 10px;
  }

  .sectionTitleBar .button{
    margin-left:20px;
  }

  .sectionWrapper{
    position: absolute;
    top: 52px;
    bottom: 0;
    width:100vw;
    min-height:900px;
    overflow:scroll;
    padding:25px;
    display: flex;
    flex-direction: column;

  }

  .sectionWrapper section{
    height:40%;
    position:relative;
  }

  .sectionWrapper section:last-child{
    height:20%;
  }

  .sectionCardWrapper{
    display:flex;
    flex-flow:row;
    overflow-x: scroll;
    position:absolute;
    top:46px;
    bottom:0;
    right: 0;
    left:0;
  }

  .eventWrapper{
    display:flex;
    flex-flow:row;
  }
</style>
