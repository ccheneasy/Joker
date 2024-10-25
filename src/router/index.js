import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
const Layouts = () => import("@/layouts/index.vue")

/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置 Name 属性
 */
export const constantRoutes = [
  {
    path: "/403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/",
    component: Layouts,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
          svgIcon: "dashboard",
          affix: true
        }
      },
      {
        path: "theme",
        component: () => import("@/views/theme/index.vue"),
        name: "theme",
        meta: {
          title: "主题",
          // svgIcon: "dashboard",
          affix: true
        }
      }
    ]
  },
]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const dynamicRoutes = [
  // {
  //   path: "/permission",
  //   component: Layouts,
  //   redirect: "/permission/page",
  //   name: "Permission",
  //   meta: {
  //     title: "权限管理",
  //     svgIcon: "lock",
  //     roles: ["admin", "editor"], // 可以在根路由中设置角色
  //     alwaysShow: true // 将始终显示根菜单
  //   },
  //   children: [
  //     {
  //       path: "page",
  //       component: () => import("@/views/permission/page.vue"),
  //       name: "PagePermission",
  //       meta: {
  //         title: "页面权限",
  //         roles: ["admin"] // 或者在子导航中设置角色
  //       }
  //     }
  //   ]
  // },
  {
    path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      hidden: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
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

export default router
