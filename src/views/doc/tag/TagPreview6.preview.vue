<preview>不同主题</preview>
<template>
  <div class="tag-group">
    <span class="tag-group__title">Dark</span>
    <xh-tag
      v-for="tag in dynamicTags"
      :key="tag"
      :type="tag.type"
      effect="Dark"
    >
      {{ tag.value }}
    </xh-tag>
  </div>
  <div class="tag-group">
    <span class="tag-group__title">Plain</span>
    <xh-tag
      v-for="tag in dynamicTags"
      :key="tag"
      :type="tag.type"
      effect="Plain"
    >
      {{ tag.value }}
    </xh-tag>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const dynamicTags = ref([
  {
    type: "primary",
    value: "标签1",
  },
  {
    type: "info",
    value: "标签1",
  },
  {
    type: "success",
    value: "标签1",
  },
  {
    type: "warning",
    value: "标签1",
  },
  {
    type: "error",
    value: "标签1",
  },
]);
</script>
