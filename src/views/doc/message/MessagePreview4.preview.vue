<preview>居中</preview>
<template>
  <xh-button @click="open1">Info</xh-button>
  <xh-button @click="open2">success</xh-button>
  <xh-button @click="open3">Warning</xh-button>
  <xh-button @click="open4">Error</xh-button>
</template>

<script setup lang="ts">
import xhMessage from "@/lib/message/index.ts";

const open1 = () => {
  xhMessage({
    message: "this is a message.",
    showClose: true,
    center: true,
  });
};
const open2 = () => {
  xhMessage({
    message: "Congrats, this is a success message.",
    type: "success",
    showClose: true,
    center: true,
  });
};
const open3 = () => {
  xhMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
    showClose: true,
    center: true,
  });
};
const open4 = () => {
  xhMessage({
    type: "error",
    message: "Oops, this is a error message.",
    showClose: true,
    duration: 0,
    center: true,
  });
};
</script>
