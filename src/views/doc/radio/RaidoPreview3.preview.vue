<preview>不同尺寸</preview>
<template>
  <xh-radio v-model="radio" label="1" size="small">选项1</xh-radio>
  <xh-radio v-model="radio" label="2">选项2</xh-radio>
  <xh-radio v-model="radio" label="3" size="large">选项3</xh-radio>
</template>

<script setup lang="ts">
import { ref } from "vue";

const radio = ref("1");
</script>

