<template>
  <div class="card card-plain">
    <div id="headingOne" role="tab" class="card-header">
      <a
        data-toggle="collapse"
        data-parent="#accordion"
        :href="`#${itemId}`"
        :aria-expanded="active"
        :aria-controls="`content-${itemId}`"
        @click.prevent="activate"
      >
        <slot name="title">
          {{ title }}
        </slot>
        <slot name="icon">
          <i v-if="!noIcon" class="now-ui-icons arrows-1_minimal-down" />
        </slot>
      </a>
    </div>
    <collapse-transition :duration="animationDuration">
      <div
        v-show="active"
        :id="`content-${itemId}`"
        role="tabpanel"
        :aria-labelledby="title"
        class="collapsed"
      >
        <div class="card-body">
          <slot />
        </div>
      </div>
    </collapse-transition>
  </div>
</template>
<script>
import { CollapseTransition } from "vue2-transitions";

export default {
  name: "CollapseItem",
  components: {
    CollapseTransition,
  },
  inject: {
    animationDuration: {
      default: 250,
    },
    multipleActive: {
      default: false,
    },
    addItem: {
      default: () => {},
    },
    removeItem: {
      default: () => {},
    },
    deactivateAll: {
      default: () => {},
    },
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    id: {
      type: String,
    },
    noIcon: Boolean,
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    itemId() {
      return this.id || this.title;
    },
  },
  mounted() {
    this.addItem(this);
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.removeItem(this);
  },
  methods: {
    activate() {
      if (!this.multipleActive) {
        this.deactivateAll();
      }
      this.active = !this.active;
    },
  },
};
</script>
<style></style>
