<template>
  <div class="icon-doc-wrapper">
    <h1>ColorPicker 选择器</h1>
    <p>用于颜色选择</p>

    <div class="preview-wrapper">
      <Preview :component="ColorPreview1" />
      <Preview :component="ColorPreview2" />
      <Preview :component="ColorPreview3" />
      <Preview :component="ColorPreview4" />
      <Doc title="ColorPicker 属性" type="prop" :body="colorPropDoc" />
      <Doc title="ColorPicker 事件" type="event" :body="colorEventDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/tag', name: 'Tag 标签' }"
        :next="{ path: '/doc/checkbox', name: 'Checkbox 复选框' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
import Preview from "@/components/Preview.vue";
import ColorPreview1 from "./ColorPreview1.preview.vue";
import ColorPreview2 from "./ColorPreview2.preview.vue";
import ColorPreview3 from "./ColorPreview3.preview.vue";
import ColorPreview4 from "./ColorPreview4.preview.vue";

const colorPropDoc = [
  ["color", "选中项绑定值", "string", "-", "-"],
  ["size", "尺寸", "string", "large / default / small", "default"],
  ["disabled", "是否禁用", "boolean", "true / false", "false"],
  ["showAlpha", "是否支持透明度选择", "boolean", "true / false", "false"],
  ["predefineColors", "	预定义颜色", "object", "-", "-"],
];

const colorEventDoc = [["change", "	当绑定值变化时触发", "(): Event => {}"], ,];
</script>

<style lang="scss">
.xh-color-picker__trigger {
  margin-right: 8px;
}
</style>
