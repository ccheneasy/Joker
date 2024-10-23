/** 统一处理 Cookie */
import Cookies from "js-cookie"

const tokenKey = 'SYSTEM-token-key`'

export const getToken = () => {
  return Cookies.get(tokenKey)
}
export const setToken = (token) => {
  Cookies.set(tokenKey, token)
}
export const removeToken = () => {
  Cookies.remove(tokenKey)
}
