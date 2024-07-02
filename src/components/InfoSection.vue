<template>
  <div
    class="info"
    :class="`info-${direction}`"
  >
    <div
      v-if="$slots.icon || icon"
      class="icon"
      :class="[`icon-${type}`, iconClasses]"
    >
      <slot name="icon">
        <i :class="icon" />
      </slot>
    </div>
    <div
      v-if="$slots.default || title"
      class="description"
    >
      <slot>
        <h4 class="info-title">
          {{ title }}
        </h4>
        <p class="description">
          {{ description }}
        </p>
      </slot>
    </div>
    <slot name="raw-content" />
  </div>
</template>
<script>
  export default {
    props: {
      direction: {
        type: String,
        default: 'horizontal'
      },
      type: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      iconClasses: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="scss">
    @import "~@/assets/sass/now-ui-kit/variables";
    @import "~@/assets/sass/now-ui-kit/mixins";
    @import '~@/assets/sass/now-ui-kit/info-areas';
</style>
