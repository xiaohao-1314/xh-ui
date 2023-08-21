<preview>
不同尺寸
</preview>
<template>
  <xh-switch v-model="checked" size="small" />
  <xh-switch v-model="checked" size="default" />
  <xh-switch v-model="checked" size="large" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>
