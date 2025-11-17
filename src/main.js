import { createApp } from "vue"

import App from "@/App.vue"
import store from "@/stores"
import { router } from "@/router"

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

import "normalize.css"
import "nprogress/nprogress.css"
import "@/assets/styles/index.css"
import "@/assets/iconfont/iconfont.css"

const app = createApp(App)

app.use(store).use(router).use(ElementPlus, {
  locale: zhCn
})

// 注册所有图标
for (const i in ElementPlusIconsVue) {
  app.component(i, ElementPlusIconsVue[i])
}

router.isReady().then(() => {
  app.mount("#app")
})
