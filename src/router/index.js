import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import { registerNavigationGuard } from "@/router/permission.js"
import Layout from "@/views/layout/index.vue"
// 常驻路由
export const constantRoutes = [
  {
    path: "/",
    name: "layout",
    redirect: "/overview",
    component: Layout,
    children: [
      {
        path: "overview",
        name: "overview",
        component: () => import("@/views/overview/index.vue"),
        meta: {
          title: "督查概览"
        }
      },
      {
        path: "operations-safety",
        name: "operations-safety",
        component: () => import("@/views/operationsSafety/index.vue"),
        meta: {
          title: "作业安全督查"
        }
      }
    ]
  }
]

export const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: constantRoutes
})

// 重置路由
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach(route => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        // 移除 定义有name和角色权限列表的动态路由
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

// 注册路由导航守卫
registerNavigationGuard(router)
