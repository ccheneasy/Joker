import { onBeforeUnmount } from "vue"
import mitt from "mitt"

/** mitt 类似vue2中创建总线(bus)进行兄弟组件间的传值,
 * 1、创建实例
 *  const emitter = mitt()
 * 2、通过实例mitt调用 emit 方法，参数：总线事件名称，传递的参数
 *  emitter.emit("getName", name)
 * 3、通过实例mitt调用 on 来监听 emit 传递过来的参数
 *  emitter.on('getName', (value) => {
 *    console.log(value)
 *  })
*/

const emitter = mitt()
const key = Symbol("ROUTE_CHANGE")
let latestRoute

/** 设置最新的路由信息，触发路由变化事件 */
export const setRouteChange = (to) => {
  // 触发事件
  emitter.emit(key, to)
  // 缓存最新的路由信息
  latestRoute = to
}

/** 单独监听路由会浪费渲染性能，使用发布订阅模式去进行分发管理 */
export function useRouteListener() {
  /** 回调函数集合 */
  const callbackList = []

  /** 监听路由变化（可以选择立即执行） */
  const listenerRouteChange = (callback, immediate = false) => {
    // 缓存回调函数
    callbackList.push(callback)
    // 监听事件
    emitter.on(key, callback)
    // 可以选择立即执行一次回调函数
    immediate && latestRoute && callback(latestRoute)
  }

  /** 移除路由变化事件监听器 */
  const removeRouteListener = (callback) => {
    emitter.off(key, callback)
  }

  /** 组件销毁前移除监听器 */
  onBeforeUnmount(() => {
    for (let i = 0; i < callbackList.length; i++) {
      removeRouteListener(callbackList[i])
    }
  })

  return { listenerRouteChange, removeRouteListener }
}
