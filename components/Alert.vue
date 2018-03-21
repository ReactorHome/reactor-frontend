<template>
  <section class="alert-container">
    <article class="message" :class="[activeClass]">
      <div class="message-body">
        <slot name="body"></slot>
      </div>
    </article>
  </section>
</template>

<script>

export default {
  name: "alert",
  props: ["type"],
  components: {
    
  },
  data: function() {
    return {
      activeClass: "none"
    }
  },
  mounted: function() {
    switch(this.type) {
      case "warning":
        this.activeClass = "is-warning";
        break;
      case "danger":
        this.activeClass = "is-danger";
        break;
      default:
        this.activeClass = "none";
    }
  }
}
</script>

<style scoped>
  article{
    margin:0px 5px;
    max-width: 400px;
  }
</style>
