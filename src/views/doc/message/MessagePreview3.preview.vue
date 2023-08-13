<preview>可关闭的消息提示</preview>
<template>
  <xh-button @click="open1">Info</xh-button>
  <xh-button @click="open2">success</xh-button>
  <xh-button @click="open3">Warning</xh-button>
  <xh-button @click="open4">Error</xh-button>
</template>

<script setup lang="ts">
import JwMessage from "@/lib/message/index.ts";

const open1 = () => {
  JwMessage({
    message: "this is a message.",
    showClose: true,
  });
};
const open2 = () => {
  JwMessage({
    message: "Congrats, this is a success message.",
    type: "success",
    showClose: true,
  });
};
const open3 = () => {
  JwMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
    showClose: true,
  });
};
const open4 = () => {
  JwMessage({
    type: "error",
    message: "Oops, this is a error message.",
    showClose: true,
    duration: 0,
  });
};
</script>
