<preview>
基础用法
</preview>
<template>
  <xh-button theme="primary" @click="toggle">点击打开对话框</xh-button>
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
