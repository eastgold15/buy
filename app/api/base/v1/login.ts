import type { AppCustomRouteRecordRaw } from '~~/types/router'
import type { IDataResponse } from '../index.type'
import type { ProfileType } from './login.type'
import { GetApi, PostApi } from '../api'

interface RoleParams {
  roleName: string
}

export interface LoginType {
  username: string
  password: string
}
export interface TokenType {
  accessToken: string
  refreshToken: string
}
export default {
  test(data: any) {
    // https://api.nuxt.com/test?param1=value1&param2=value2
    return GetApi('/test', { query: { param1: 'value1', param2: 'value2' } })
  },
  loginApi(data: LoginType): Promise<IDataResponse<TokenType>> {
    return GetApi('/auth/login', { query: data }) as Promise<IDataResponse<TokenType>>
  },
  loginOutApi(): Promise<IDataResponse<null>> {
    return GetApi('user/loginOut') as Promise<IDataResponse<null>>
  },
  getUserInfoApi(): Promise<IDataResponse<ProfileType>> {
    return GetApi('/account/profile') as Promise<IDataResponse<ProfileType>>
  },
  getUserMenuInfoAPi(): Promise<AppCustomRouteRecordRaw[]> {
    return GetApi('/account/menus') as Promise<AppCustomRouteRecordRaw[]>
  },
  getAdminRoleApi(params: RoleParams): Promise<AppCustomRouteRecordRaw[]> {
    return GetApi('/role/list', { query: params }) as Promise<AppCustomRouteRecordRaw[]>
  },
  getTestRoleApi() {
    // return PostApi('/role/list', { params }) as Promise<AppCustomRouteRecordRaw[]>
  },

}
