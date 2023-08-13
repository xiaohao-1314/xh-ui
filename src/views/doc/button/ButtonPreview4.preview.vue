<preview>图标</preview>
<template>
  <xh-Button type="primary" icon-placement="right">
    <template #icon>
      <xh-icon size="20">
        <Add16Regular />
      </xh-icon>
    </template>
    默认按钮
  </xh-Button>
  <xh-Button type="primary">
    <template #icon>
      <xh-icon size="20">
        <Add16Regular />
      </xh-icon>
    </template>
    默认按钮
  </xh-Button>
</template>
<script setup lanng="scss">
import { Add16Regular } from "@vicons/fluent";
</script>
