<template>
  <div
    class="form-group"
    :class="[
      {'input-group': hasIcon},
      {'has-danger': error},
      {'input-group-focus': focused},
      {'has-label': label || $slots.label}]"
  >
    <slot name="label">
      <label
        v-if="label"
        :class="labelClasses"
      >
        {{ label }}
        <span v-if="required">*</span>
      </label>
    </slot>

    <slot name="addonLeft">
      <div
        v-if="addonLeftIcon"
        class="input-group-prepend"
      >
        <i
          class="input-group-text"
          :class="addonLeftIcon"
        />
      </div>
    </slot>
    <slot>
      <input
        :value="value"
        v-bind="$attrs"
        class="form-control"
        :class="[{valid: value && !error}, inputClasses]"
        aria-describedby="addon-right addon-left"
        v-on="listeners"
      >
    </slot>
    <slot name="addonRight">
      <span
        v-if="addonRightIcon"
        class="input-group-addon input-group-append"
      >
        <i
          class="input-group-text"
          :class="addonRightIcon"
        />
      </span>
    </slot>

    <slot name="infoBlock" />
    <slot name="helpBlock">
      <div
        v-if="error"
        class="text-danger invalid-feedback"
        style="display: block;"
        :class="{'mt-2': hasIcon}"
      >
        {{ error }}
      </div>
    </slot>
  </div>
</template>
<script>
  export default {
    name: 'FgInput',
    inheritAttrs: false,
    props: {
      required: Boolean,
      label: String,
      error: String,
      labelClasses: String,
      inputClasses: String,
      value: {
        type: [String, Number],
        default: ''
      },
      addonRightIcon: String,
      addonLeftIcon: String
    },
    data() {
      return {
        focused: false
      }
    },
    computed: {
      listeners() {
        return {
          ...this.$listeners,
          input: this.updateValue,
          focus: this.onFocus,
          blur: this.onBlur
        }
      },
      hasIcon() {
        const {addonRight, addonLeft} = this.$slots;
        return addonRight !== undefined || addonLeft !== undefined || this.addonRightIcon !== undefined || this.addonLeftIcon !== undefined
      }
    },
    methods: {
      updateValue(evt) {
        let value = evt.target.value;
        this.$emit('input', value);
      },
      onFocus(value){
        this.focused = true;
        this.$emit('focus', value);
      },
      onBlur(value){
        this.focused = false;
        this.$emit('blur', value);
      }
    }
  }
</script>
<style>

</style>
