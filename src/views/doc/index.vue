<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside :style="asideStyle">
        <div class="menu">
          <div
            class="menu-group"
            v-for="(itemx, index) in docMenus"
            :key="index"
          >
            <span class="menu-group-title text-overflow">
              {{ index }}{{ index !== "文档" ? `（${itemx.length}）` : "" }}
            </span>
            <router-link
              v-for="(itemy, indey) in itemx"
              :key="indey"
              class="menu-item text-overflow"
              :to="`/doc/${itemy.path}`"
              >{{ itemy.name }}</router-link
            >
          </div>
        </div>
      </aside>
      <div class="toggle-button" @click="toggleAside" :style="toggleAsidStyle">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </div>
      <main :style="mainStyle" id="doc-content-container">
        <router-view />
      </main>
      <div class="top-button" @click="topClick">🔼</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Topnav from "@/components/Topnav.vue";
import { inject, type Ref, computed, onMounted } from "vue";
import { docMenus } from "@/router/doc-routes.ts";
const asideVisible = inject<Ref<boolean>>("asideVisible");
const clientWidth = inject<Ref<number>>("clientWidth");
const toggleAside = () => {
  asideVisible.value = !asideVisible.value;
};

const asideStyle = computed(() => {
  return { left: asideVisible.value ? "0px" : "-285px" };
});

const toggleAsidStyle = computed(() => {
  return {
    left: asideVisible.value ? "285px" : "0px",
    transform: asideVisible.value
      ? "rotate(180deg) translateX(50%)"
      : "rotate(0deg) translateX(50%)",
  };
});

const mainStyle = computed(() => {
  return clientWidth.value < 500
    ? { "padding-left": "24px" }
    : { "padding-left": asideVisible.value ? "325px" : "60px" };
});

const scrollToTop = (
  scrollContainer: HTMLElement,
  speed: number = 10,
  step: number = 10
) => {
  // scrollContainer：要滚动的容器元素，可以是 window 或任意具有 scrollTop 属性的元素
  // speed：每次滚动的距离，即返回顶部的速度，默认为 10
  // step：每次滚动的时间间隔，单位为毫秒，默认为 10
  let scrollTop = scrollContainer.scrollTop;
  const time = setInterval(() => {
    scrollTop -= speed;
    if (scrollTop <= 0) {
      clearInterval(time);
      scrollContainer.scrollTop = 0;
    } else {
      scrollContainer.scrollTop = scrollTop;
    }
  }, step);
};

const topClick = () => {
  const container = document.getElementById("doc-content-container");
  scrollToTop(container, 80, 10);
};
</script>
<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    display: flex;
    flex-grow: 1;
    position: absolute;
    top: 63px;
    left: 0px;
    height: calc(100% - 63px);
    width: 100%;
    transition: all 0.5 ease;
    z-index: 1;

    > aside {
      flex-shrink: 0;
      width: 272px;
      padding: 16px;
      height: 100%;
      background-color: #fff;
      border-right: 1px solid #efeff5;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      transition: all 250ms ease;
      overflow-y: auto;

      .menu,
      .menu-group {
        width: 100%;
      }

      .menu-group-title,
      .menu-item {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .menu-group-title {
        height: 36px;
        padding-left: 32px;
        font-size: 13px;
        color: rgb(118, 124, 130);
        overflow: hidden;

        &:hover {
          cursor: default;
        }
      }

      .menu-item {
        height: 44px;
        padding-left: 48px;
        color: rgb(51, 54, 57);
        font-size: 14px;

        &:hover {
          color: #4098fc !important;
        }
      }

      .router-link-exact-active {
        color: #4098fc !important;
        // background-color: #e7f5ee;
        border-radius: 3px;
      }
    }
    > main {
      flex-grow: 1;
      box-sizing: border-box;
      padding: 32px 24px 100px 36px;
      transition: all 250ms ease;
      overflow: auto;

      h1 {
        margin: 28px 0 20px 0;
      }

      p {
        margin: 16px 0;
        color: rgb(51, 54, 57);
        font-size: 14px;
      }
      .preview-wrapper {
        width: 90%;

        @media (max-width: 500px) {
          width: 100%;
        }
      }
    }
  }
}

.toggle-button {
  width: 30px;
  height: 50px;
  // border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgb(239, 239, 245);
  position: absolute;
  left: 272px;
  top: 260px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 6%);
  transition: left 250ms ease, transform 0.1s ease;
  z-index: 10;
  transition: all 250ms;

  > .icon {
    width: 12px;
    height: 12px;
  }
  &:hover {
    background: #4098fc;
    color: #ffffff;
  }

  @media (max-width: 500px) {
    display: none;
  }
}
.top-button {
  position: fixed;
  bottom: 25px;
  right: 50px;
  padding: 10px;
  font-size: 32px;
  cursor: pointer;
}
</style>
