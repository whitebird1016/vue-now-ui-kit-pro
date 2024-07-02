<template>
  <div
    id="notifications"
    class="section section-notifications"
  >
    <div class="space" />
    <div class="container">
      <h4>Notifications</h4>
    </div>
    <div
      class="alert alert-success"
      role="alert"
    >
      <div class="container">
        <div class="alert-icon">
          <i class="now-ui-icons ui-2_like" />
        </div>
        <strong>Well done!</strong> You successfully read this important alert message.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">
            <i class="now-ui-icons ui-1_simple-remove" />
          </span>
        </button>
      </div>
    </div>
    <div
      class="alert alert-info"
      role="alert"
    >
      <div class="container">
        <div class="alert-icon">
          <i class="now-ui-icons travel_info" />
        </div>
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">
            <i class="now-ui-icons ui-1_simple-remove" />
          </span>
        </button>
      </div>
    </div>
    <div
      class="alert alert-warning"
      role="alert"
    >
      <div class="container">
        <div class="alert-icon">
          <i class="now-ui-icons ui-1_bell-53" />
        </div>
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">
            <i class="now-ui-icons ui-1_simple-remove" />
          </span>
        </button>
      </div>
    </div>
    <div
      class="alert alert-danger"
      role="alert"
    >
      <div class="container">
        <div class="alert-icon">
          <i class="now-ui-icons objects_support-17" />
        </div>
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">
            <i class="now-ui-icons ui-1_simple-remove" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
    export default {}
</script>
<style>
</style>
