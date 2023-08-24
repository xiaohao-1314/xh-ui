<preview>
文字用法
</preview>
<template>
  <span @click="toggle">点击打开对话框</span>
  <xh-dialog v-model="visible" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};

const confirm = () => {};

const cancel = () => {};
</script>
