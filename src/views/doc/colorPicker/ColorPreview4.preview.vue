<preview>预定义颜色</preview>
<template>
  <xh-color-picker
    color="rgb(64, 158, 255)"
    :predefineColors="predefineColors"
  />
</template> 
<script setup lanng="ts">
import { ref } from "vue";

const predefineColors = ref([
  "#ff4500",
  "#ff8c00",
  "#ffd700",
  "#90ee90",
  "#00ced1",
  "#1e90ff",
  "#c71585",
  "rgba(255, 69, 0, 0.68)",
  "rgb(255, 120, 0)",
  "#c7158577",
]);
</script>