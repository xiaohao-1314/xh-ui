<preview>手动 focus & select & blur</preview>
<template>
  <xh-button @click="handleFocus">Focus</xh-button>
  <xh-button @click="handleSelect">Select</xh-button>
  <xh-button @click="handleBlur">Blur</xh-button>
  <xh-input placeholder="请输入内容" v-model="value" ref="inputInstRef" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("马儿乖，马儿好，马儿光跑不吃草");
const inputInstRef = ref();
const handleFocus = () => {
  inputInstRef.value.focus();
};
const handleBlur = () => {
  inputInstRef.value.blur();
};
const handleSelect = () => {
  inputInstRef.value.select();
};
</script>
