<preview>禁用状态</preview>
<template>
  <xh-select
    id="select"
    style="width: 200px"
    :options="options"
    v-model="value"
    disabled
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("1");
const options = [
  {
    label: "选项一",
    value: "1",
  },
  {
    label: "选项二",
    value: "2",
  },
  {
    label: "选项三",
    value: "3",
  },
  {
    label: "选项四",
    value: "4",
  },
  {
    label: "选项五",
    value: "5",
  },
  {
    label: "选项六",
    value: "6",
  },
  {
    label: "选项七",
    value: "7",
  },
  {
    label: "选项八",
    value: "8",
  },
  {
    label: "选项九",
    value: "9",
  },
  {
    label: "选项十",
    value: "10",
  },
];
</script>
