import { eventBus } from '~/utils/eventBus'

interface MessageOptions {
  type?: 'success' | 'warning' | 'info' | 'error'
  duration?: number
  showClose?: boolean
  center?: boolean
}

export function useMessage() {
  return {
    success(message: string, options?: MessageOptions) {
      eventBus.emit('message:success', message, options)
    },
    error(message: string, options?: MessageOptions) {
      eventBus.emit('message:error', message, options)
    },
    warning(message: string, options?: MessageOptions) {
      eventBus.emit('message:warning', message, options)
    },
    info(message: string, options?: MessageOptions) {
      eventBus.emit('message:info', message, options)
    },
  }
}
