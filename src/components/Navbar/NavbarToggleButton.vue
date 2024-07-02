<template>
  <button
    type="button"
    class="navbar-toggler"
    :class="{toggled: toggled}"
    data-toggle="collapse"
    data-target="#navbar"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-bar top-bar" />
    <span class="navbar-toggler-bar middle-bar" />
    <span class="navbar-toggler-bar bottom-bar" />
  </button>
</template>
<script>
    export default {
      name: 'NavbarToggleButton',
      props: {
        toggled: Boolean
      }
    }
</script>
<style>
</style>
