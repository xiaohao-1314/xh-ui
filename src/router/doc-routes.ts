import { h } from "vue";
import Markdown from "@/components/Markdown.vue";

import { html as GetStarted } from "../../markdown/get-started.md";
import { html as Install } from "../../markdown/install.md";
import { html as Intro } from "../../markdown/intro.md";

const md = (string) => h(Markdown, { content: string, key: string });
const IntroDoc = md(Intro);
// const GetStartedDoc = md(GetStarted);
// const InstallDoc = md(Install);

import AvatarDoc from "@/views/doc/avatar/index.vue";
import ButtonDoc from "@/views/doc/button/index.vue";
import DividerDoc from "@/views/doc/divider/index.vue";
import EllipsisDoc from "@/views/doc/ellipsis/index.vue";
import GradientTextDoc from "@/views/doc/gradient-text/index.vue";
import IconDoc from "@/views/doc/icon/index.vue";
import LinkDoc from "@/views/doc/link/index.vue";
import TagDoc from "@/views/doc/tag/index.vue";
import ColorDoc from "@/views/doc/colorPicker/index.vue";

import CheckboxDoc from "@/views/doc/checkbox/index.vue";
import InputDoc from "@/views/doc/input/index.vue";
import RadioDoc from "@/views/doc/radio/index.vue";
import SelectDoc from "@/views/doc/select/index.vue";
import SwitchDoc from "@/views/doc/switch/index.vue";

import AlertDoc from "@/views/doc/alert/index.vue";
import DialogDoc from "@/views/doc/dialog/index.vue";
import DrawerDoc from "@/views/doc/drawer/index.vue";
import MessageDoc from "@/views/doc/message/index.vue";

import AffixDoc from "@/views/doc/affix/index.vue";
import BacktopDoc from "@/views/doc/backtop/index.vue";
import BreadcrumbDoc from "@/views/doc/breadcrumb/index.vue";
import PageHeaderDoc from "@/views/doc/page-header/index.vue";
import TabsDoc from "@/views/doc/tabs/index.vue";

const docMenus = {
  文档: [
    { path: "intro", component: IntroDoc, name: "介绍" }
    // { path: "install", component: InstallDoc, name: "安装" },
    // { path: "get-started", component: GetStartedDoc, name: "快速使用" },
  ],
  通用组件: [
    { path: "avatar", component: AvatarDoc, name: "Avatar 头像" },
    { path: "button", component: ButtonDoc, name: "Button 按钮" },
    { path: "divider", component: DividerDoc, name: "Divider 分割线" },
    { path: "ellipsis", component: EllipsisDoc, name: "Ellipsis 文本省略" },
    {
      path: "gradient-text",
      component: GradientTextDoc,
      name: "GradientText 渐变文字",
    },
    { path: "icon", component: IconDoc, name: "Icon 图标" },
    { path: "link", component: LinkDoc, name: "Link 链接" },
    { path: "tag", component: TagDoc, name: "Tag 标签" },
    { path: "colorPicker", component: ColorDoc, name: "Color Picker 选择器" },
  ],
  数据录入组件: [
    { path: "checkbox", component: CheckboxDoc, name: "Checkbox 复选框" },
    { path: "input", component: InputDoc, name: "Input 输入框" },
    { path: "radio", component: RadioDoc, name: "Radio 单选框" },
    { path: "select", component: SelectDoc, name: "Select 选择器" },
    { path: "switch", component: SwitchDoc, name: "Switch 开关" },
  ],
  反馈组件: [
    { path: "alert", component: AlertDoc, name: "Alert 提示" },
    { path: "dialog", component: DialogDoc, name: "Dialog 对话框" },
    { path: "drawer", component: DrawerDoc, name: "Drawer 抽屉" },
    { path: "message", component: MessageDoc, name: "Message 信息" },
  ],
  导航组件: [
    { path: "affix", component: AffixDoc, name: "Affix 固钉" },
    { path: "backtop", component: BacktopDoc, name: "Backtop 回到顶部" },
    { path: "breadcrumb", component: BreadcrumbDoc, name: "Breadcrumb 面包屑" },
    { path: "page-header", component: PageHeaderDoc, name: "PageHeader 页头" },
    { path: "tabs", component: TabsDoc, name: "Tabs 标签页" },
  ],
};

let docRoutes = [];
for (let i in docMenus) {
  docRoutes = [...docRoutes, ...docMenus[i]];
}

export { docRoutes, docMenus };
