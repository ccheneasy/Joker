/** 统一处理 localStorage */

const activeThemeName = 'SYSTEM-active-theme-name-key'

// 正在应用的主题名称
export const getActiveThemeName = () => {
  return localStorage.getItem(activeThemeName)
}
export const setActiveThemeName = (themeName) => {
  localStorage.setItem(activeThemeName, themeName)
}
