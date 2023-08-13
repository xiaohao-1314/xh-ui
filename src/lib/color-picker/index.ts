import { ref, computed } from "vue";
export const colorPickerProps = {
    color: {
        type: String,
    },
    size: {
        type: String,
        default: "",
    },
    showAlpha: {
        type: Boolean,
        default: false,
    },
    predefineColors: {
        type: Array,
        default: []
    }
};

export const useColor = (props, emits) => {
    const changeColor = ref("");
    const style1 = computed(() => {
        return {
            background: changeColor.value,
        };
    });
    const style2 = computed(() => {
        return {
            background: `linear-gradient(90deg, #fff, ${changeColor.value})` || "",
        };
    });

    const style3 = computed(() => {
        return {
            background: `linear-gradient(to left, rgba(255, 0, 0, 0) 0%, ${changeColor.value} 100%)`,
        };
    });

    const classes = computed(() => ({
        [`xh-color-picker__trigger-${props.size}`]: props.size,
    }));

    const isShowAlpha = computed(() => {
        return props.showAlpha
    });
    const predefineColors = computed(() => {
        return props.predefineColors
    });
    return {
        changeColor,
        style1,
        style2,
        style3,
        classes,
        isShowAlpha,
        predefineColors
    };
}