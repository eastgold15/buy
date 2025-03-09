<script lang="ts" setup>
import { $endApi } from '~/api/base'

const loading = ref(false)
const loginForm = reactive({
  username: '',
  password: '',
})

async function handleLogin() {
  if (!loginForm.username || !loginForm.password) {
    return ElMessage.error('请输入用户名和密码')
  }

  loading.value = true
  try {
    // 这里替换为实际的登录API调用
    const response = await $endApi.v1.login.loginApi(loginForm)
    if (response.code === 200) {
      const userStore = useUserStore()
      userStore.setToken(response.data!.accessToken)
    }

    // 登录成功后的处理
    navigateTo('/')
  }
  catch (error: any) {
    ElMessage.error(`登录失败：${error.message}`)
    
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">
        系统登录
      </h2>
      <div class="login-form">
        <div class="form-item">
          <input v-model="loginForm.username" type="text" placeholder="请输入用户名" class="form-input">
        </div>
        <div class="form-item">
          <input v-model="loginForm.password" type="password" placeholder="请输入密码" class="form-input">
        </div>
        <div class="form-item">
          <button class="login-button" :disabled="loading" @click="handleLogin">
            {{ loading ? '登录中...' : '登录' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  width: 400px;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-item {
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.form-input:focus {
  border-color: #409eff;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #66b1ff;
}

.login-button:disabled {
  background-color: #a0cfff;
  cursor: not-allowed;
}
</style>
