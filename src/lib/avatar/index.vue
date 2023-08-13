<template>
  <span class="xh-avatar" :class="classes" :style="styles">
    <img
      v-if="src && !hasLoadError"
      :src="src"
      :alt="alt"
      @error="handleError"
    />
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
const props = defineProps({
  size: {
    type: [String, Number],
    default: "default",
  },
  src: {
    type: String,
    default: "",
  },
  shape: {
    type: String,
    default: "circle",
  },
  fit: {
    type: String,
    default: "fill",
  },
  alt: {
    type: String,
  },
  color: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
});

const emits = defineEmits(["error"]);
const colorchange = (e) => {
  console.log(e);
};
const hasLoadError = ref(false);
const { size, shape, color, backgroundColor, fit } = props;
const classes = computed(() => {
  return {
    [`xh-avatar-${size}`]: typeof size === "string",
    [`xh-avatar-${shape}`]: shape,
    [`xh-avatar-${fit}`]: fit,
  };
});

const styles = computed(() => {
  return {
    width: typeof size === "number" ? `${size}px` : "",
    height: typeof size === "number" ? `${size}px` : "",
    color,
    backgroundColor,
  };
});

// need reset hasLoadError to false if src changed
watch(
  () => props.src,
  () => (hasLoadError.value = false)
);

const handleError = (e: Event) => {
  hasLoadError.value = true;
  emits("error", e);
};
</script>
<script lang="ts">
export default {
  name: "xhAvatar",
};
</script>

<style lang="scss">
$font-size: 14px;
$small-size: 24px;
$default-size: 40px;
$large-size: 56px;

$white: #fff;
$default-background: #c0c4cc;
.xh-avatar {
  background-color: $default-background;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: $font-size;
  color: $white;
  > img {
    width: 100%;
    height: 100%;
  }
}

.xh-avatar-small {
  width: $small-size;
  height: $small-size;
}

.xh-avatar-default {
  width: $default-size;
  height: $default-size;
}

.xh-avatar-large {
  width: $large-size;
  height: $large-size;
}

.xh-avatar-circle {
  /* background-color: transparent; */
  border-radius: 100%;
  > img {
    border-radius: 100%;
  }
}

.xh-avatar-square {
  /* background-color: transparent; */
  border-radius: 3px;
  > img {
    border-radius: 3px;
  }
}

.xh-avatar-fill {
  > img {
    object-fit: fill;
  }
}

.xh-avatar-contain {
  > img {
    object-fit: contain;
  }
}

.xh-avatar-cover {
  > img {
    object-fit: cover;
  }
}

.xh-avatar-none {
  > img {
    object-fit: none;
  }
}

.xh-avatar-scale-down {
  > img {
    object-fit: scale-down;
  }
}
</style>
