<template>
  <div
    class="form-check form-check-radio"
    :class="[inlineClass, {disabled: disabled}]"
  >
    <label
      :for="cbId"
      class="form-check-label"
    >
      <input
        :id="cbId"
        v-model="model"
        class="form-check-input"
        type="radio"
        :disabled="disabled"
        :value="label"
      >
      <span class="form-check-sign" />
      <slot />
    </label>
  </div>
</template>
<script>
  export default {
    name: 'NRadio',
    props: {
      label: [String, Number],
      disabled: Boolean,
      value: [String, Boolean],
      inline: Boolean
    },
    data () {
      return {
        cbId: ''
      }
    },
    computed: {
      model: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      },
      inlineClass () {
        if (this.inline) {
          return `form-check-inline`
        }
        return ''
      }
    },
    created () {
      this.cbId = Math.random().toString(16).slice(2)
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/assets/sass/now-ui-kit/variables";
  @import "~@/assets/sass/now-ui-kit/checkboxes-radio";
</style>
