export const baseURLApi = (url: string) => `/api/v2${url}`
// 通用响应结果封装
export type resResult<T> = {
  code: number
  message: string
  data: T
}
