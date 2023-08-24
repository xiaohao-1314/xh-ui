<preview>可以关闭</preview>
<template>
  <xh-alert title="Default 类型" closeable description="这是一段描述">
    <template #icon>
      <xh-icon class="xh-alert-icon" :size="22">
        <IosAirplane />
      </xh-icon>
    </template>
  </xh-alert>
  <xh-alert
    title="Info 类型"
    type="info"
    show-icon
    closeable
    description="这是一段描述"
  />
  <xh-alert
    title="Success 类型"
    type="success"
    show-icon
    closeable
    description="这是一段描述"
  />
  <xh-alert
    title="Warning 类型"
    type="warning"
    show-icon
    closeable
    description="这是一段描述"
  />
  <xh-alert
    title="Error 类型"
    type="error"
    show-icon
    closeable
    description="这是一段描述"
  />
</template>
<script setup lang="ts">
import { IosAirplane } from "@vicons/ionicons4";
</script>
