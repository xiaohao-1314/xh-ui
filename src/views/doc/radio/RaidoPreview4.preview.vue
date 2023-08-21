<preview>单选框组</preview>
<template>
  <xh-radio-group v-model="radio" size="large">
    <xh-radio label="1">选项 A</xh-radio>
    <xh-radio label="2">选项 B</xh-radio>
    <xh-radio label="3" disabled>选项 C</xh-radio>
  </xh-radio-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const radio = ref("1");
</script>
