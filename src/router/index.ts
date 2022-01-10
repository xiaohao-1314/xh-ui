import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";
import SwitchDemo from "@/components/SwitchDemo.vue";
import ButtonDemo from "@/components/ButtonDemo.vue";
import DialogDemo from "@/components/DialogDemo.vue";
import TabsDemo from "@/components/TabsDemo.vue";
import Intro from "@/views/doc/intro/index.vue";
import Install from "@/views/doc/install/index.vue";
import GetStarted from "@/views/doc/get-started/index.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "intro", component: Intro },
        { path: "install", component: Install },
        { path: "get-started", component: GetStarted },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});

export default router;
