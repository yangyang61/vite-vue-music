import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "../views/Layout/index.vue";
import Index from "../views/Index/index.vue";
import Search from "../views/Search/index.vue";
import Play from "../views/Play/index.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/layout",
    },
    {
      path: "/layout",
      component: Layout,
      children: [
        {
          path: "index",
          component: Index,
          meta: {
            title: "首页",
          },
        },
        {
          path: "search",
          component: Search,
          meta: {
            title: "搜索",
          },
        },
      ],
    },
    {
      path: "/play",
      component: Play,
      meta: {
        title: "",
      },
    },
  ],
});

export default router;
