<preview>密码框</preview>
<template>
  <xh-input placeholder="请输入内容" v-model="value" show-password />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("hello");
</script>
