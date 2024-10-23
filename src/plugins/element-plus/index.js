import ElementPlus from "element-plus"
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export function loadElementPlus(app) {
  /** Element Plus 组件完整引入 */
  app.use(ElementPlus, {
    // 将 Element Plus 的语言设置为中文
    locale: zhCn,
  })
}
