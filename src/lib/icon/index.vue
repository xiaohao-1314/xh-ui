<template>
  <Icon class="xh-icon" :size="size" :style="{ opacity: `${depth / 10}` }">
    <slot></slot>
  </Icon>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
import { Icon } from "@vicons/utils";
defineProps({
  depth: Number,
  size: {
    type: [Number, String],
    default: "40px",
  },
});
const attrs = useAttrs();
</script>
<script lang="ts">
export default {
  name: "xhIcon",
};
</script>

<style lang="scss">
.xh-icon {
  display: inline-block;
  > span {
    display: inline-block;
  }
}
</style>
