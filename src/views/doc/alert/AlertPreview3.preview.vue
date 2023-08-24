<preview>使文字居中</preview>
<template>
  <xh-alert title="Default 类型" center>
    <template #icon>
      <xh-icon class="xh-alert-icon" :size="22">
        <IosAirplane />
      </xh-icon>
    </template>
  </xh-alert>
  <xh-alert title="Info 类型" type="info" show-icon center />
  <xh-alert title="Success 类型" type="success" show-icon center />
  <xh-alert title="Warning 类型" type="warning" show-icon center />
  <xh-alert title="Error 类型" type="error" show-icon center />
</template>
<script setup lang="ts">
import { IosAirplane } from "@vicons/ionicons4";
</script>
