<template>
  <fade-transition>
    <div
      v-if="visible"
      class="alert"
      :class="[`alert-${type}`]"
      role="alert"
    >
      <slot v-if="!dismissible" />
      <div
        v-else
        class="container"
      >
        <slot />
        <slot name="dismiss-icon">
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="dismissAlert"
          >
            <span aria-hidden="true">
              <i class="now-ui-icons ui-1_simple-remove" />
            </span>
          </button>
        </slot>
      </div>
    </div>
  </fade-transition>
</template>
<script>
  import { FadeTransition } from 'vue2-transitions';

  export default {
    name: 'Alert',
    components: {
      FadeTransition
    },
    props: {
      type: {
        type: String,
        default: 'default',
        description: 'Alert type'
      },
      dismissible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible: true
      }
    },
    methods: {
      dismissAlert() {
        this.visible = false;
      }
    }
  }
</script>
