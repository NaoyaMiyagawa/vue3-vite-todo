import { useToast } from 'vue-toastification'

const toastification = useToast()

export const toast = {
  default(message: string) {
    toastification(message)
  },
  success(message: string) {
    toastification.success(message)
  },
  info(message: string) {
    toastification.info(message)
  },
  warning(message: string) {
    toastification.warning(message)
  },
  error(message: string) {
    toastification.error(message)
  },
}
