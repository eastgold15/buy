import { acceptHMRUpdate, defineStore } from 'pinia'

export interface ProfileType {
  id?: number
  username: string
  avatar?: string
  roles: string[]
  permissions: string[]
}
export const useUserStore = defineStore('user', () => {
  const accessToken = ref('')
  const refreshToken = ref('')
  const userInfo = ref<ProfileType>()
  const isLoggedIn = computed(() => !!accessToken.value)
  function setToken(token: string) {
    accessToken.value = token
    localStorage.setItem('accessToken', token)
  }
  function setUserInfo(info: ProfileType) {
    userInfo.value = info
    localStorage.setItem('userInfo', JSON.stringify(info))
  }

  function init() {
    // 从本地存储恢复数据
    const savedToken = localStorage.getItem('token')
    const savedUserInfo = localStorage.getItem('userInfo')
    if (savedToken)
      accessToken.value = savedToken
    if (savedUserInfo)
      userInfo.value = JSON.parse(savedUserInfo)
  }
  const loginOut = () => {
    accessToken.value = ''
    refreshToken.value = ''
    userInfo.value = undefined
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('userInfo')
  }

  return {
    accessToken,
    refreshToken,
    userInfo,
    isLoggedIn,
    init,
    loginOut,
    setToken,
    setUserInfo,

  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
