import { http } from '@/utils/http'
import { baseURLApi, type resResult } from './utils'

type blogConfig = {
  id?: number
  blogName: string
  blogAvatar: string
  avatarBg: string
  personalSay: string
  blogNotice: string
  qqLink: string
  weChatLink: string
  githubLink: string
  giteeLink: string
  weChatGroup: string
  qqGroup: string
  mail: string
  createTime: Date
  updateTime: Date
}
export const getArticleList = () => {
  return http.request<resResult<blogConfig>>(
    'get',
    baseURLApi('/blog/config/getConfig'),
    {},
  )
}
