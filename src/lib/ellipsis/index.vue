<template>
  <div @click="toggle" class="xh-ellipsis" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, reactive } from "vue";
const props = defineProps({
  lineClamp: {
    type: Number,
  },
  width: {
    type: Number,
    default: 300,
  },
  expandTrigger: String,
});
const { lineClamp, expandTrigger, width } = props;

const classes = computed(() => ({
  ["xh-ellipsis-line-clamp"]: lineClamp,
  ["xh-ellipsis-expand-trigger"]: expandTrigger,
}));

let styles = reactive({});
const isExpand = ref(false);
styles["-webkit-line-clamp"] = lineClamp;
styles["max-width"] = width + "px";

watch(
  () => isExpand.value,
  () => {
    styles["-webkit-line-clamp"] = !isExpand.value ? lineClamp : "";
  }
);

const toggle = () => {
  if (expandTrigger === "click") {
    isExpand.value = !isExpand.value;
  }
};
</script>
<script lang="ts">
export default {
  name: "xhEllipsis",
};
</script>
<style lang="scss">
.xh-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;

  &:not(.xh-ellipsis-line-clamp) {
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
  }

  &.xh-ellipsis-line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  &.xh-ellipsis-expand-trigger {
    cursor: pointer;
  }
}
</style>
