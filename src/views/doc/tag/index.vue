<template>
  <div class="tag-doc-wrapper">
    <h1>Tag 标签</h1>
    <p>用于标记和选择。</p>
    <div class="preview-wrapper">
      <Preview :component="TagPreview1" />
      <Preview :component="TagPreview2" />
      <Preview :component="TagPreview3" />
      <Preview :component="TagPreview4" />
      <Preview :component="TagPreview5" />
      <Preview :component="TagPreview6" />
      <Doc title="Tag 属性" type="prop" :body="propDoc" />
      <Doc title="Tag 插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/link', name: '链接 Link' }"
        :next="{ path: '/doc/colorPicker', name: 'Color Picker 选择器' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import TagPreview1 from "./TagPreview1.preview.vue";
import TagPreview2 from "./TagPreview2.preview.vue";
import TagPreview3 from "./TagPreview3.preview.vue";
import TagPreview4 from "./TagPreview4.preview.vue";
import TagPreview5 from "./TagPreview5.preview.vue";
import TagPreview6 from "./TagPreview6.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";

const propDoc = [
  ["closable", "是否可关闭", "boolean", "-", "false"],
  ["color", "	字体颜色", "string", "-", "-"],
  ["backgroundColor", "	背景颜色", "-", "-", "-"],
  ["borderColor", "	边框颜色", "-", "-", "-"],
  ["hit", "边框描边", "boolean", "-", "true "],
  ["size", "标签大小", "string", "	small/ medium / large", "medium "],
  [
    "type",
    "类型",
    "string",
    "default / primary / info / success / warning / error",
    "default",
  ],
  ["effect", "主题", "string", "	Dark/ Plain", "Dark "],
];

const slotDoc = [["default", "	标签内容", "-"]];
</script>

<style lang="scss">
.xh-tag {
  margin-right: 8px;
}
.tag-group {
  width: 100%;
  display: block;
  &:nth-of-type(2) {
    margin-top: 10px;
  }
  .tag-group__title {
    display: inline-block;
    width: 45px;
    font-size: 14px;
    color: #606266;
  }
}
</style>
