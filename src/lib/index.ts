import { App } from "vue";

import xhAvatar from "./avatar/index.vue";
import xhButton from "./button/index.vue";
import xhDivider from "./divider/index.vue";
import xhEllipsis from "./ellipsis/index.vue";
import xhGradientText from "./gradient-text/index.vue";
import xhIcon from "./icon/index.vue";
import xhLink from "./link/index.vue";
import xhTag from "./tag/index.vue";
import xhColorPicker from "./color-picker/index.vue";

import xhCheckbox from "./checkbox/checkbox.vue";
import xhCheckboxGroup from "./checkbox/checkbox-group.vue";
import xhInput from "./input/index.vue";
import xhRadio from "./radio/radio.vue";
import JwRadioGroup from "./radio/radio-group.vue";
import xhSelect from "./select/index.vue";
import xhSwitch from "./switch/index.vue";

import xhAlert from "./alert/index.vue";
import xhDialog from "./dialog/index.vue";
import xhDrawer from "./drawer/drawer.vue";
import xhMessage from "./message/index.ts";
import { openDialog } from "./dialog/openDialog";

import JwAffix from "./affix/index.vue";
import JwBacktop from "./backtop/index.vue";
import JwBreadcrumb from "./breadcrumb/breadcrumb.vue";
import JwBreadcrumbItem from "./breadcrumb/breadcrumb-item.vue";
import jwPageHeader from "./page-header/index.vue";
import JwTabs from "./tabs/index.vue";
import JwTab from "./tab/index.vue";

export {
  /* 通用组件 */
  xhAvatar,
  xhButton,
  xhDivider,
  xhEllipsis,
  xhGradientText,
  xhIcon,
  xhLink,
  xhTag,
  xhColorPicker,
  /* 数据录入组件 */
  xhCheckbox,
  xhCheckboxGroup,
  xhInput,
  xhRadio,
  JwRadioGroup,
  xhSelect,
  xhSwitch,
  /* 反馈组件 */
  xhAlert,
  xhDialog,
  xhDrawer,
  xhMessage,
  openDialog,
  /* 导航组件 */
  JwAffix,
  JwBacktop,
  JwBreadcrumb,
  JwBreadcrumbItem,
  jwPageHeader,
  JwTabs,
  JwTab,
};

const components = [
  xhAvatar,
  xhButton,
  xhDivider,
  xhEllipsis,
  xhGradientText,
  xhIcon,
  xhLink,
  xhTag,
  xhColorPicker,

  xhCheckbox,
  xhCheckboxGroup,
  xhInput,
  xhRadio,
  JwRadioGroup,
  xhSelect,
  xhSwitch,

  xhAlert,
  xhDialog,
  xhDrawer,

  JwAffix,
  JwBacktop,
  JwBreadcrumb,
  JwBreadcrumbItem,
  jwPageHeader,
  JwTabs,
  JwTab,
];

export function registerJwUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerJwUi;
