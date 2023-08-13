<template>
  <div
    class="xh-divider"
    :class="{
      horizontal: direction === 'horizontal',
      vertical: direction === 'vertical',
    }"
  >
    <div
      class="xh-divider-line horizontal"
      :class="lineClasses"
      v-if="direction === 'horizontal'"
    />

    <div
      class="xh-divider-title"
      :class="classes"
      v-if="direction === 'horizontal'"
    >
      <slot></slot>
    </div>

    <div class="xh-divider-line vertical" v-if="direction === 'vertical'" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  titlePlacement: {
    type: String,
    default: "left",
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  weight: {
    type: Number,
    default: 1,
  },
  direction: {
    type: String,
    default: "horizontal",
  },
});

const classes = computed(() => ({
  "is-left": props.titlePlacement === "left",
  "is-right": props.titlePlacement === "right",
  "is-center": props.titlePlacement === "center",
}));
const lineClasses = computed(() => ({
  [`weight-${props.weight}`]: true,
}));
</script>
<script lang="ts">
export default {
  name: "xhDivider",
};
</script>

<style lang="scss">
.xh-divider {
  display: flex;
  box-sizing: border-box;
  font-size: 16px;
  color: rgb(31, 34, 37);

  &.horizontal {
    margin: 24px 0;
    position: relative;
    width: 100%;
  }

  .xh-divider-line {
    background-color: #dcdfe6;

    &.horizontal {
      height: 1px;
      width: 100%;
      position: absolute;
      border: none;
    }

    &.vertical {
      display: inline-block;
      width: 1px;
      height: 1em;
      margin: 0 8px;
      vertical-align: middle;
      position: relative;
    }
  }

  .xh-divider-title {
    position: absolute;
    top: 0;
    font-size: 16px;
    font-weight: 500;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 0 20px;

    &.is-left {
      left: 20px;
    }
    &.is-right {
      right: 20px;
    }
    &.is-center {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}
@for $i from 1 through 150 {
  .weight-#{$i} {
    height: (1px * $i) !important;
  }
}
</style>
