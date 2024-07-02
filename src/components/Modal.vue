<template>
  <SlideYUpTransition :duration="animationDuration">
    <div
      v-show="show"
      class="modal fade"
      :class="[{'show d-block': show}, {'d-none': !show}, {'modal-mini': type === 'mini'}]"
      tabindex="-1"
      role="dialog"
      :aria-hidden="!show"
      @click.self="closeModal"
    >
      <div
        class="modal-dialog"
        :class="[{'modal-notice': type === 'notice'}, modalClasses]"
      >
        <div class="modal-content">
          <slot name="base-content">
            <div
              class="modal-header"
              :class="headerClasses"
            >
              <slot name="close-button">
                <button
                  v-if="showClose"
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  :aria-hidden="!show"
                  @click="closeModal"
                >
                  <i class="now-ui-icons ui-1_simple-remove" />
                </button>
              </slot>
              <slot name="header" />
            </div>

            <div
              class="modal-body"
              :class="bodyClasses"
            >
              <slot />
            </div>

            <div
              class="modal-footer"
              :class="footerClasses"
            >
              <slot name="footer" />
            </div>
          </slot>
        </div>
      </div>
    </div>
  </SlideYUpTransition>
</template>
<script>
  import { SlideYUpTransition } from 'vue2-transitions'

  export default {
    name: 'Modal',
    components: {
      SlideYUpTransition
    },
    props: {
      show: Boolean,
      showClose: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: '',
        validator(value) {
          let acceptedValues = ['', 'notice', 'mini']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      modalClasses: [Object, String],
      headerClasses: [Object, String],
      bodyClasses: [Object, String],
      footerClasses: [Object, String],
      animationDuration: {
        type: Number,
        default: 500
      }
    },
    watch: {
      show(val) {
        let documentClasses = document.body.classList
        if (val) {
          documentClasses.add('modal-open')
        } else {
          documentClasses.remove('modal-open')
        }
      }
    },
    methods: {
      closeModal() {
        this.$emit('update:show', false)
        this.$emit('close')
      }
    }
  }
</script>
<style>
    .modal.show {
        background-color: rgba(0, 0, 0, 0.3)
    }
</style>
<style lang="scss">
    @import "~@/assets/sass/now-ui-kit/variables";
    @import "~@/assets/sass/now-ui-kit/mixins";
    @import "~@/assets/sass/now-ui-kit/modals";
</style>
