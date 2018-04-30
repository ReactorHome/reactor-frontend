<template>
  <section class="navbar-container">
    <nav class="navbar is-primary" role="navigation" aria-label="navigation">
      <a class="navbar-item">
        <p class="navTitle title">Reactor</p>
      </a>

      <!--<div class="navbar-end">-->
        <!--<a class="navbar-item is-active">-->
          <!--Dashboard-->
        <!--</a>-->

        <!--<a class="navbar-item">-->
          <!--Supported Devices-->
        <!--</a>-->

        <!--<a class="navbar-item">-->
          <!--Account-->
        <!--</a>-->
      <!--</div>-->

    </nav>
  </section>
</template>

<script>

export default {
  name: "navbar",
  components: {

  }
}
</script>

<style scoped>
  .navTitle{
    font-style: italic;
    font-weight: 200;
    color:white;
  }
</style>
