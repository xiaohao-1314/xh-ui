<preview>多选框组</preview>
<template>
  <xh-checkbox-group v-model="checkList" size="large">
    <xh-checkbox label="选项A" />
    <xh-checkbox label="选项B" />
    <xh-checkbox label="选项C" />
  </xh-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkList = ref(["选项A"]);
</script>
