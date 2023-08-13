<template>
  <div class="xh-tag" :class="classes" :style="style">
    <xh-ellipsis>
      <slot></slot>
    </xh-ellipsis>
    <xh-icon :size="18" v-if="closeable" @click="handleClose">
      <Close />
    </xh-icon>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Close } from "@vicons/ionicons5";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
  borderColor: {
    type: String,
  },
  effect: {
    type: String,
  },
  hit: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(["close"]);
const classes = computed(() => ({
  [`is-${props.type}`]: props.type,
  [`is-${props.size}`]: props.size,
  [`is-closeable`]: props.closeable,
  [`is-hit`]: props.hit,
  [`is-${props.type}-${props.effect}`]: props.effect,
}));
const { color, backgroundColor, borderColor } = props;
const style = computed(() => {
  return {
    color: color || "",
    backgroundColor: backgroundColor || "",
    borderColor: borderColor || "",
  };
});

const handleClose = () => {
  emits("close");
};
</script>
<script lang="ts">
export default {
  name: "xhTag",
};
</script>

<style scoped lang="scss">
.xh-tag {
  white-space: nowrap;
  position: relative;
  box-sizing: border-box;
  cursor: default;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 8px;
  height: 30px;
  font-size: 14px;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid rgb(239, 239, 245);
  background-color: rgb(250, 250, 252);
  color: rgb(51, 54, 57);
  max-width: 100%;

  &.is-default {
    border: 1px solid rgb(226, 226, 228);
    background-color: rgb(250, 250, 252);
    color: rgb(51, 54, 57);
  }
  &.is-success {
    color: rgb(24, 160, 88);
    background-color: rgba(24, 160, 88, 0.1);
    border: 1px solid rgb(168, 219, 193);
  }

  &.is-info {
    color: #ffffff;
    background-color: #909399;
    border: 1px solid #909399;
  }

  &.is-warning {
    color: rgb(240, 160, 32);
    background-color: rgba(240, 160, 32, 0.12);
    border: 1px solid rgb(249, 214, 159);
  }
  &.is-primary {
    color: rgb(32, 130, 240);
    background-color: rgba(32, 130, 240, 0.1);
    border: 1px solid rgb(172, 208, 249);
  }
  &.is-error {
    color: rgb(208, 48, 80);
    background-color: rgba(208, 48, 80, 0.08);
    border: 1px solid rgb(241, 195, 204);
  }

  &.is-default-Dark {
    border: 1px solid rgb(226, 226, 228);
    background-color: rgb(250, 250, 252);
    color: rgb(51, 54, 57);
  }
  &.is-success-Dark {
    color: rgb(24, 160, 88);
    background-color: rgba(24, 160, 88, 0.1);
    border: 1px solid rgb(168, 219, 193);
  }

  &.is-info-Dark {
    color: #ffffff;
    background-color: #909399;
    border: 1px solid #909399;
  }

  &.is-warning-Dark {
    color: rgb(240, 160, 32);
    background-color: rgba(240, 160, 32, 0.12);
    border: 1px solid rgb(249, 214, 159);
  }
  &.is-primary-Dark {
    color: rgb(32, 130, 240);
    background-color: rgba(32, 130, 240, 0.1);
    border: 1px solid rgb(172, 208, 249);
  }
  &.is-error-Dark {
    color: rgb(208, 48, 80);
    background-color: rgba(208, 48, 80, 0.08);
    border: 1px solid rgb(241, 195, 204);
  }

  &.is-default-Plain {
    border: 1px solid transparent;
    background-color: rgb(250, 250, 252);
    color: rgb(51, 54, 57);
  }
  &.is-success-Plain {
    color: rgb(24, 160, 88);
    background-color: transparent;
    border: 1px solid rgb(168, 219, 193);
  }

  &.is-info-Plain {
    color: rgb(51, 54, 57);
    background-color: transparent;
    border: 1px solid #909399;
  }

  &.is-warning-Plain {
    color: rgb(240, 160, 32);
    background-color: transparent;
    border: 1px solid rgb(249, 214, 159);
  }
  &.is-primary-Plain {
    color: rgb(32, 130, 240);
    background-color: transparent;
    border: 1px solid rgb(172, 208, 249);
  }
  &.is-error-Plain {
    color: rgb(208, 48, 80);
    background-color: transparent;
    border: 1px solid rgb(241, 195, 204);
  }

  &.is-small {
    font-size: 12px;
    line-height: 14px;
    height: 24px;
  }

  &.is-large {
    height: 34px;
    font-size: 16px;
    line-height: 16px;
  }

  .xh-icon {
    cursor: pointer;
  }

  &.is-closeable {
    padding-right: 3px;
  }
  .is-hit {
    border: none;
  }
}
</style>
