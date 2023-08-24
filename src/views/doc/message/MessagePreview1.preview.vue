<preview>基础使用</preview>
<template>
  <xh-button @click="open">Show Message</xh-button>
  <xh-button @click="openVn">Vnode</xh-button>
</template>

<script setup lang="ts">
import { h } from "vue";
import xhMessage from "@/lib/message/index.ts";

const open = () => {
  xhMessage("This is a Message");
};

const openVn = () => {
  xhMessage({
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>
