<preview>不同状态</preview>
<template>
  <xh-button @click="open1">Info</xh-button>
  <xh-button @click="open2">success</xh-button>
  <xh-button @click="open3">Warning</xh-button>
  <xh-button @click="open4">Error</xh-button>
</template>

<script setup lang="ts">
import xhMessage from "@/lib/message/index.ts";

const open1 = () => {
  xhMessage("this is a message.");
};
const open2 = () => {
  xhMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  xhMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  xhMessage.error("Oops, this is a error message.");
};
</script>
