export default defineNuxtRouteMiddleware((to, from) => {
  const message = useMessage()
  const userStore = useUserStore()
  if (!userStore.accessToken) {
    message.error('请先登录')
    return navigateTo('/auth/login')
  }
})
