export * from './v1/account.type'
export * from './v1/aigc/chat.type'
export * from './v1/auth.type'
export * from './v1/banner.type'
export * from './v1/cms.type'
export * from './v1/common.type'
export * from './v1/tool.type'

// 基础响应类型
export interface ResVO<T = any> {
  code: number
  data: T
  message: string
}

// 分页元数据
export interface PageMeta {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

// 分页数据
export interface PageVO<T> {
  items: T[]
  meta: PageMeta
}

// 分页响应类型
export type PageResVO<T> = ResVO<PageVO<T>>

// // 用户信息响应
// interface UserVO {
//   id: number
//   name: string
// }
// type UserResVO = ResVO<UserVO>

// // 用户列表分页响应
// type UserListResVO = PageResVO<UserVO>

// // API 定义示例
// async function getUserList(): Promise<UserListResVO> {
//   // ...
// }
