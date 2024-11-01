import { request } from "@/utils/service"

/** 获取登录验证码 */
export function getRefreshCode() {
  return request({
    url: "login/refreshCode",
    method: "get"
  })
}

export function getAccount() {
  return request({
    url: "login/getAccount",
    method: "get"
  })
}

/** 登录并返回 Token */
export function loginApi(data) {
  return request({
    url: "users/login",
    method: "post",
    data
  })
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return request({
    url: "users/info",
    method: "get"
  })
}
