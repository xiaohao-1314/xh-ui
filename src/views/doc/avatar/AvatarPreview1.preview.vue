<preview>不同尺寸</preview>
<template>
  <div class="img">
    <div>
      <xh-avatar :src="imgUrl" size="small" />
      <xh-avatar :src="imgUrl" size="default" />
      <xh-avatar :src="imgUrl" size="large" />
      <xh-avatar :src="imgUrl" :size="100" />
    </div>

    <div>
      <xh-avatar :src="imgUrl" shape="square" size="small" />
      <xh-avatar :src="imgUrl" shape="square" size="default" />
      <xh-avatar :src="imgUrl" shape="square" size="large" />
      <xh-avatar :src="imgUrl" shape="square" :size="100" />
    </div>
  </div>
</template>
<script setup lang="ts">
import imgUrl from "/src/assets/image/avator.jpg";
</script>
