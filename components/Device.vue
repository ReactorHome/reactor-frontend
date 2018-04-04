<template>
  <section class="card-container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ device.name }}
        </p>
        <p class="card-header-icon" aria-label="more options">
          <span class="icon has-text-danger">
            <i class="fa fa-exclamation-circle"></i>
          </span>
        </p>
      </header>
      <div class="card-content">
      <div class="content">
        <p><b>Devices:</b> 2</p>
        <p><b>Events:</b> 1</p>

        <br />

        <button class="button is-danger">View Alert</button>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Manage Group</a>
    </footer>
  </div>
  </section>
</template>

<script>
export default {
  name: "device",
  props: [
    "device"
  ],
}
</script>

<style scoped>
  .card{
    max-width: 20%;
    min-width:350px;
    margin:10px;
    height:auto;
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
