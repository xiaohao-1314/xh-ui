<template>
  <div class="xh-color-picker__trigger" @click.stop="onClick" :class="classes">
    <span class="color-picker__color-inner" :style="style1"></span>
  </div>
  <div class="xh-color-picker-content" v-if="isShow">
    <div style="display: flex">
      <div
        class="xh-color-picker-panel"
        ref="image"
        @click="getColor($event, 'image')"
      >
        <div class="xh-color-picker-white-panel" :style="style2"></div>
        <div class="xh-color-picker-black-panel"></div>
        <!-- <div class="xh-color-picker-panel-cursor"></div> -->
      </div>

      <!-- 容器元素 -->
      <div class="xh-color-slider xh-is-vertical">
        <div
          class="xh-color-slider-bar"
          ref="image3"
          @click="getColor($event, 'image3')"
        >
          <div class="xh-color-slider-thumb"></div>
        </div>
      </div>
    </div>
    <div class="xh-alpha-slider-bar" v-if="isShowAlpha">
      <!-- 背景图 -->
      <div class="xh-alpha-slider-wrapper"></div>
      <!-- 背景色 -->
      <div
        class="xh-alpha-slider-bg"
        :style="style3"
        ref="image1"
        @click="getColor($event, 'image1')"
      ></div>
      <!-- 滑块元素 -->
      <div class="xh-alpha-slider-thumb"></div>
    </div>
    <div class="xh-color-drop-container">
      <input class="xh-color-input" v-model="inputValue" />
      <div class="xh-color-drop-btn-group">
        <button
          type="button"
          class="xh-color-drop-btn xh-color-clear"
          @click="clean"
        >
          Clear
        </button>
        <button
          type="button"
          class="xh-color-drop-btn xh-color-sure"
          @click="sure"
        >
          OK
        </button>
      </div>
    </div>
    <div class="xh-pre-define-color-container">
      <div
        class="xh-pre-define-color"
        :tabindex="index"
        v-for="(item, index) in predefineColors"
        :key="index"
        :style="{ background: item }"
        @click="defineClick(item)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  watch,
  getCurrentInstance,
  onMounted,
  onUnmounted,
} from "vue";
import html2canvas from "html2canvas";
import { colorPickerProps, useColor } from "./index";

const props = defineProps(colorPickerProps);
const emits = defineEmits(["change"]);
const arr = ref(["#f00", "#ff0", "#0f0", "#0ff", "#00f"]);
const {
  changeColor,
  style1,
  style2,
  style3,
  classes,
  isShowAlpha,
  predefineColors,
} = useColor(props, emits);
const isShow = ref(false);
const inputValue = ref("");

watch(changeColor, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    emits("change", changeColor.value);
  }
});
onMounted(() => {
  changeColor.value = props.color || "";
  inputValue.value = props.color || "";
});

const onClick = () => {
  isShow.value = !isShow.value;
};
const defineClick = (item) => {
  changeColor.value = item;
  inputValue.value = item;
};

const currentInstance = getCurrentInstance();
const getColor = (e, target) => {
  // 获取图片元素
  const image = currentInstance.ctx.$refs[target];
  html2canvas(image).then((canvas) => {
    const canvas1 = document.createElement("canvas");
    const ctx = canvas1.getContext("2d");
    ctx.drawImage(canvas, 0, 0);
    const x = e.offsetX;
    const y = e.offsetY;
    // 获取canvas中的图片数据
    const data = ctx.getImageData(x, y, 1, 1).data || [];
    // 计算颜色值
    const colorArr = [0, 0, 0];
    for (let i = 0; i < data.length; i += 4) {
      colorArr[0] += data[i];
      colorArr[1] += data[i + 1];
      colorArr[2] += data[i + 2];
    }
    colorArr[0] = Math.round(colorArr[0] / (data.length / 4));
    colorArr[1] = Math.round(colorArr[1] / (data.length / 4));
    colorArr[2] = Math.round(colorArr[2] / (data.length / 4));
    // 设置颜色值为响应式数据
    changeColor.value = `rgb(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`;
    inputValue.value = `rgb(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`;
  });
};

const sure = () => {
  changeColor.value = inputValue.value;
};
const clean = () => {
  inputValue.value = "";
};
</script>
<script lang="ts">
export default {
  name: "xhColorPicker",
};
</script>

<style lang="scss">
$large-width: 40px;
$default-width: 32px;
$small-width: 24px;

$large-height: 40px;
$default-height: 32px;
$small-height: 24px;

.xh-color-picker__trigger {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 32px;
  width: 32px;
  padding: 4px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 0;
  position: relative;
  cursor: pointer;
  &.xh-color-picker__trigger-large {
    height: $large-height;
    width: $large-width;
  }

  &.xh-color-picker__trigger-small {
    height: $small-height;
    width: $small-width;
  }
  &.xh-color-picker__trigger-default {
    height: $default-height;
    width: $default-width;
  }
  > .color-picker__color-inner {
    width: 100%;
    background-color: rgba(19, 206, 102, 0.8);
    height: 100%;
  }
}

.xh-color-picker-content {
  display: flex;
  // position: absolute;
  // top: 235px;
  flex-direction: column;
  box-shadow: 0px 0px 5px 5px rgb(233 233 233 / 50%);
  padding: 5px 11px;
  background: #ffffff;
  z-index: 1;
  .xh-color-picker-panel {
    width: 280px;
    height: 180px;
    position: relative;
    border: 1px solid #fff;
    background-color: rgb(255, 166, 0);
    cursor: pointer;
    > div.xh-color-picker-white-panel,
    > div.xh-color-picker-black-panel {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    > .xh-color-picker-white-panel {
      background: linear-gradient(90deg, #fff, rgb(18, 217, 121));
    }
    > .xh-color-picker-black-panel {
      background: linear-gradient(0deg, #000, transparent);
    }
  }
}

.xh-color-picker-panel-cursor {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  position: absolute;
  left: 100%;
  top: 0;
  transform: translate(-4px, -4px);
  box-shadow: 0 0 0 3px #fff, inset 0 0 2px 2px rgb(0 0 0 / 40%);
  cursor: default;
}
.xh-color-slider,
.xh-color-slider-bar {
  position: relative;
}
.xh-color-slider.xh-is-vertical {
  // width: 28px;
  cursor: pointer;
  float: right;
  .xh-color-slider-bar {
    width: 12px;
    height: 100%;
    float: left;
    margin-left: 3px;
    background: linear-gradient(
      180deg,
      #f00 0,
      #ff0 17%,
      #0f0 33%,
      #0ff 50%,
      #00f 67%,
      #f0f 83%,
      #f00
    );
    .xh-color-slider-thumb {
      background-color: #fff;
      border-radius: 4px;
      position: absolute;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      border: 1px solid #dcdee2;
      left: 0;
      top: 0;
      box-sizing: border-box;
      position: absolute;
    }
  }
}
.xh-alpha-slider-bar {
  height: 12px;
  position: relative;
  margin-top: 5px;
  .xh-alpha-slider-wrapper,
  .xh-alpha-slider-bg {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
  .xh-alpha-slider-bar .xh-alpha-slider-bg {
    background: linear-gradient(
      to right,
      rgba(255, 0, 0, 0) 0%,
      rgba(255, 0, 0) 100%
    );
  }
  .xh-alpha-slider-wrapper {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==");
  }
  .xh-alpha-slider-thumb {
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    border: 1px solid #dcdee2;
    left: 0;
    top: 0;
    box-sizing: border-box;
    position: absolute;
  }
}
.xh-color-drop-container {
  margin-top: 5px;
  min-height: 28px;
  position: relative;
  .xh-color-input {
    display: inline-block;
    padding: 8px 12px;
    border: 1px solid #e9ebee;
    color: #606266;
    border-radius: 4px;
    outline: none;
    width: 160px;
    height: 28px;
    line-height: 28px;
    border: 1px solid #dcdfe6;
    padding: 0 5px;
    -webkit-transition: border-color 0.2s
      cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: border-color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 5px;
    background-color: #fff;
  }
  .xh-color-drop-btn-group {
    position: absolute;
    right: 0;
    top: 5px;
    .xh-color-drop-btn {
      padding: 5px;
      font-size: 12px;
      border-radius: 3px;
      -webkit-transition: 0.1s;
      transition: 0.1s;
      font-weight: 500;
      margin: 0;
      white-space: nowrap;
      color: #606266;
      border: 1px solid #dcdfe6;
      letter-spacing: 1px;
      text-align: center;
      cursor: pointer;
      &.xh-color-clear {
        // color: #4096ef;
        border-color: transparent;
        background-color: transparent;
        padding-left: 0;
        padding-right: 0;
      }
      &.xh-color-clear:hover {
        color: #66b1ff;
      }
      &.xh-color-sure {
        margin-left: 10px;
        background: none;
        &:hover {
          border-color: #4096ef;
          color: #4096ef;
        }
      }
    }
  }
}
.xh-pre-define-color-container {
  width: 280px;
  font-size: 12px;
  margin-top: 8px;
}
.xh-pre-define-color-container::after {
  content: "";
  display: table;
  height: 0;
  visibility: hidden;
  clear: both;
}
.xh-pre-define-color-container .xh-pre-define-color {
  margin: 0 0 8px 8px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #9b979b;
  cursor: pointer;
  float: left;
}
.xh-pre-define-color-container .xh-pre-define-color:hover {
  opacity: 0.8;
}
.xh-pre-define-color-active {
  box-shadow: 0 0 3px 2px #409eff;
}
.xh-pre-define-color:nth-child(10n + 1) {
  margin-left: 0;
}
.xh-pre-define-color.xh-pre-define-color-disabled {
  cursor: not-allowed;
}
</style>
