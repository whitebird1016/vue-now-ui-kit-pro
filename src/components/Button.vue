<template>
  <component
    :is="tag"
    :type="nativeType"
    class="btn"
    :class="classes"
    @click="handleClick"
  >
    <span
      v-if="$slots.label"
      class="btn-label"
    >
      <slot name="label" />
    </span>
    <slot />
    <span
      v-if="$slots.labelRight"
      class="btn-label btn-label-right"
    >
      <slot name="labelRight" />
    </span>
  </component>
</template>
<script>
  export default {
    name: 'NButton',
    props: {
      tag: {
        type: String,
        default: 'button'
      },
      type: {
        type: String,
        default: 'default'
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      round: Boolean,
      simple: Boolean,
      block: Boolean,
      social: Boolean,
      link: Boolean,
      icon: Boolean,
      wide: Boolean,
      size: {
        type: String,
        default: ""
      }
    },
    computed: {
      classes() {
        let btnClasses = [
          {'btn-simple': this.simple},
          {'btn-icon': this.icon},
          {'btn-round': this.round},
          {'btn-block': this.block},
          {'btn-social': this.social},
          {'btn-link': this.link},
          {'btn-wd': this.wide},
          `btn-${this.type}`
        ];
        if (this.size) {
          btnClasses.push(`btn-${this.size}`)
        }
        return btnClasses
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>
<style>
</style>
