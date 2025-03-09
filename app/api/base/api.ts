import type { SearchParameters } from 'ofetch'
import type { PageResVO, ResVO } from './index.type'
import { reject } from 'lodash-es'
import Message from '~/components/message.vue'

// 定义业务错误
export class BusinessError extends Error {
  constructor(
    public code: number,
    message: string,
    public data?: any,
  ) {
    super(message)
  }
}

interface ApiOptions<T = any> {
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete'
  body?: T
  params?: SearchParameters
  query?: SearchParameters
  headers?: any[]
  mock?: boolean
}

export function useApi<T = any>(url: string, options: ApiOptions) {
  const runtimeConfig = useRuntimeConfig()
  const nuxtapp = useNuxtApp()
  const baseUrl = options.mock ? runtimeConfig.public.apiBase_mock : runtimeConfig.public.apiBase
  return useFetch<ResVO<T>>(url, {
    baseURL: baseUrl,
    onRequest({ options }) {
      console.log('请求配置', options)
      let token = ''
      if (import.meta.client) {
        token = localStorage.getItem('accessToken') || ''
      }

      options.headers = {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',

        ...options.headers,
      } as unknown as Headers
    },
    onResponse({ response }) {
      console.log('======= response =======\n', response)
      const data = response._data as ResVO<T>
      if (response.status >= 200 && response.status < 300) {
        if (data.code != 200) {
          // 特定错误码处理
          switch (data.code) {
            case 401:
              const userStore = useUserStore()
              userStore.loginOut()
              if (import.meta.client) {
                ElMessage.error('登录已过期')
              }
              return nuxtapp.runWithContext(() => {
                navigateTo('/auth/login')
              })
            case 403:
              return nuxtapp.runWithContext(() => {
                navigateTo({
                  path: '/error',
                  query: {
                    code: response._data.code,
                    message: response._data.message,
                  },
                })
              })
            default:
              throw new BusinessError(data.code, data.message, data.data)
          }
        }
      }
      return data
    },
    onResponseError({ error }) {
      if (import.meta.client) {
        if (error.message.includes('Network Error')) {
          ElMessage.error('网络连接错误')
        }
        else if (error.message.includes('timeout')) {
          ElMessage.error('请求超时')
        }
        else {
          ElMessage.error('服务器错误')
          Message.error(error.message)
        }
      }
      return Promise.reject(error)
    },
    ...options,
  })
}
export function GetApi<T = any>(url: string, options?: ApiOptions<T>) {
  return useApi<T>(url, {
    method: 'get',
    ...options,
  }).then(({ data }) => data.value)
}

// 使用 Promise 链式调用的 POST 请求
export function PostApi<T = any>(url: string, options: ApiOptions<T>) {
  return useApi<T>(url, {
    method: 'post',
    ...options,
  }).then(({ data }) => data.value)
}

// 分页数据请求
export function GetPageApi<T = any>(url: string, options?: ApiOptions<T>) {
  return useApi<PageResVO<T>>(url, {
    method: 'get',
    ...options,
  }).then(({ data }) => data.value)
}
