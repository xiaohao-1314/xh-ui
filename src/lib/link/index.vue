<template>
  <a class="xh-link" :class="classes">
    <xh-icon
      v-if="icon && iconPlacement === 'left'"
      :size="iconSize"
      class="xh-icon-left"
    >
      <component :is="icon" />
    </xh-icon>
    <slot></slot>
    <xh-icon
      v-if="icon && iconPlacement === 'right'"
      :size="iconSize"
      class="xh-icon-right"
    >
      <component :is="icon" />
    </xh-icon>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  underline: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    deafult: false,
  },
  icon: {
    type: [String, Object],
  },
  iconPlacement: {
    type: String,
    default: "left",
  },
  iconSize: {
    type: [Number, String],
    default: "18px",
  },
});

const { type, underline, disabled } = props;

const classes = computed(() => {
  return {
    [`xh-link-${type}`]: type,
    ["xh-link-underline"]: underline,
    ["xh-link-disabled"]: disabled,
  };
});
</script>
<script lang="ts">
export default {
  name: "xhLink",
};
</script>

<style lang="scss">
$default-color: #333;
$primary-color: #4098fc;
$info-color: #909399;
$success-color: #67c23a;
$warning-color: #f0a020;
$error-color: #d03050;

$font-size: 16px;
.xh-link {
  font-size: $font-size;
  position: relative;
  display: flex;
  align-items: center;
  height: calc($font-size + 5px);
  > span {
    padding-bottom: 5px;
  }

  &.xh-link-default {
    color: $default-color;
    &:hover {
      color: $primary-color;
    }
    &.xh-link-underline:hover:after {
      border-bottom: 1px solid $primary-color;
    }

    &.xh-link-disabled {
      color: lighten($default-color, 50%);

      &.xh-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.xh-link-primary {
    color: $primary-color;
    &:hover {
      color: lighten($primary-color, 20%);
    }
    &.xh-link-underline:hover:after {
      border-bottom: 1px solid lighten($primary-color, 20%);
    }

    &.xh-link-disabled {
      color: lighten($primary-color, 30%);

      &.xh-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.xh-link-info {
    color: $info-color;
    &:hover {
      color: lighten($info-color, 20%);
    }
    &.xh-link-underline:hover:after {
      border-bottom: 1px solid lighten($info-color, 20%);
    }

    &.xh-link-disabled {
      color: lighten($info-color, 20%);

      &.xh-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.xh-link-success {
    color: $success-color;
    &:hover {
      color: lighten($success-color, 20%);
    }
    &.xh-link-underline:hover:after {
      border-bottom: 1px solid lighten($success-color, 20%);
    }

    &.xh-link-disabled {
      color: lighten($success-color, 20%);

      &.xh-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.xh-link-warning {
    color: $warning-color;
    &:hover {
      color: lighten($warning-color, 20%);
    }
    &.xh-link-underline:hover:after {
      border-bottom: 1px solid lighten($warning-color, 20%);
    }

    &.xh-link-disabled {
      color: lighten($warning-color, 20%);

      &.xh-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.xh-link-error {
    color: $error-color;
    &:hover {
      color: lighten($error-color, 20%);
    }
    &.xh-link-underline:hover:after {
      border-bottom: 1px solid lighten($error-color, 20%);
    }

    &.xh-link-disabled {
      color: lighten($error-color, 30%);

      &.xh-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.xh-link-underline:hover:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
  }

  &.xh-link-disabled {
    cursor: not-allowed;
  }

  .xh-icon-right {
    margin-left: 5px;
  }

  .xh-icon-left {
    margin-right: 5px;
  }
}
</style>
