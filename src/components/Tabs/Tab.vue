<template>
  <div
    v-show="active"
    :id="id || label"
    class="tab-pane"
    :class="{ active: active }"
    :aria-expanded="active"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: "TabPane",
  inject: ["addTab", "removeTab"],
  props: {
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    this.addTab(this);
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.removeTab(this);
  },
};
</script>
<style></style>
