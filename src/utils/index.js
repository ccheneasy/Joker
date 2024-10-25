import dayjs from "dayjs"

/** 格式化时间 */
export const formatDateTime = (time) => {
  return time ? dayjs(new Date(time)).format("YYYY-MM-DD HH:mm:ss") : "N/A"
}

/** 用 JS 获取全局 css 变量 */
export const getCssVariableValue = (cssVariableName) => {
  let cssVariableValue = ""
  try {
    // 没有拿到值时，会返回空串
    // getComputedStyle 获取指定元素所有的计算后样式属性及其对应值的对象，该对象是只读的。
    cssVariableValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariableName)
  } catch (error) {
    console.error(error)
  }
  return cssVariableValue
}

/** 用 JS 设置全局 CSS 变量 */
export const setCssVariableValue = (cssVariableName, cssVariableValue) => {
  try {
    document.documentElement.style.setProperty(cssVariableName, cssVariableValue)
  } catch (error) {
    console.error(error)
  }
}
