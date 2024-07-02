<template>
  <component
    :is="componentTag"
    class="n-badge"
    :class="`badge-${type}`"
    :href="href"
  >
    <slot />
  </component>
</template>
<script>
  export default {
    name: 'Badge',
    props: {
      tag: {
        type: String,
        default: 'span'
      },
      href: {
        type: String,
        default: "javascript:;"
      },
      type: {
        type: String,
        default: 'default',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger', 'default', 'neutral'];
          return acceptedValues.indexOf(value) !== -1
        }
      }
    },
    computed: {
      componentTag() {
        return this.href ? 'a' : this.tag;
      }
    }
  }
</script>
<style>
</style>
