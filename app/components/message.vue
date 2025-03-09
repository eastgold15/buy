<script lang="ts" setup>
import { eventBus } from '~/utils/eventBus'

interface MessageOptions {
  type?: 'success' | 'warning' | 'info' | 'error'
  duration?: number
  showClose?: boolean
  center?: boolean
}

// 消息事件处理
function handleMessage(type: string, message: string, options?: MessageOptions) {
  ElMessage({
    message,
    type: type as any,
    duration: 3000,
    showClose: true,
    ...options,
  })
}

// 注册事件监听
onMounted(() => {
  eventBus.on('message:success', (message: string, options?: MessageOptions) =>
    handleMessage('success', message, options))
  eventBus.on('message:error', (message: string, options?: MessageOptions) =>
    handleMessage('error', message, options))
  eventBus.on('message:warning', (message: string, options?: MessageOptions) =>
    handleMessage('warning', message, options))
  eventBus.on('message:info', (message: string, options?: MessageOptions) =>
    handleMessage('info', message, options))
})

// 清理事件监听
onUnmounted(() => {
  eventBus.off('message:success', handleMessage)
  eventBus.off('message:error', handleMessage)
  eventBus.off('message:warning', handleMessage)
  eventBus.off('message:info', handleMessage)
})
</script>

<template>
  <div class="message-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.message-wrapper {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}
</style>
