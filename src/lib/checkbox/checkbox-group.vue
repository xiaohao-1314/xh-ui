<template>
  <label class="xh-checkbox-group">
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs } from "vue";
import { checkboxGroupProps, checkboxGroupEmits } from "./checkbox-group";
const props = defineProps(checkboxGroupProps);
const emits = defineEmits(checkboxGroupEmits);

const changeEvent = (value) => {
  emits("update:modelValue", value);
  emits("change", value);
};

provide(
  "checkboxGroupKey",
  reactive({
    ...toRefs(props),
    changeEvent,
  })
);
</script>
<script lang="ts">
export default {
  name: "xhCheckboxGroup",
};
</script>

<style lang="scss">
.xh-checkbox-group {
}
</style>
