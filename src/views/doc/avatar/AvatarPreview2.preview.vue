<preview>图片适应容器框</preview>
<template>
  <div class="img">
    <xh-avatar :src="imgUrl" shape="square" :size="100" fit="fill" />
    <xh-avatar :src="imgUrl" shape="square" :size="100" fit="contain" />
    <xh-avatar :src="imgUrl" shape="square" :size="100" fit="cover" />
    <xh-avatar :src="imgUrl" shape="square" :size="100" fit="none" />
    <xh-avatar :src="imgUrl" shape="square" :size="100" fit="scale-down" />
  </div>
</template>
<script setup lang="ts">
import imgUrl from "/src/assets/image/avator.jpg";
</script>
