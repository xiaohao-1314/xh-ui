<preview>
基础用法
</preview>
<template>
  <xh-switch v-model="checked" />
  <xh-switch v-model="checked" disabled />
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>
