<template>
  <card class="card-stats">
    <div class="statistics statistics-horizontal">
      <div class="info info-horizontal">
        <div class="row">
          <div
            v-if="$slots.icon || icon"
            class="col-5"
          >
            <div
              class="icon icon-circle"
              :class="`icon-${type}`"
            >
              <slot name="icon">
                <i :class="icon" />
              </slot>
            </div>
          </div>
          <div
            v-if="$slots.content || title"
            class="col-7 text-right"
          >
            <slot>
              <h3
                v-if="title"
                class="info-title"
              >
                {{ title }}
              </h3>
              <h6
                v-if="subTitle"
                class="stats-title"
              >
                {{ subTitle }}
              </h6>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="$slots.footer"
      slot="footer"
      class="stats"
    >
      <slot name="footer" />
    </div>
  </card>
</template>
<script>
import Card from "./Card.vue";

export default {
  name: "StatsCard",
  components: {
    Card,
  },
  props: {
    type: {
      type: String,
      default: "primary",
    },
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
};
</script>
<style></style>
