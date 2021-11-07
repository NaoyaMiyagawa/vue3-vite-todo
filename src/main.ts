import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'virtual:windi.css'
// Toast
import Toast, { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const toastOptions: PluginOptions = {
  transition: 'Vue-Toastification__fade',
  toastClassName: 'el_toast',
}

createApp(App).use(createPinia()).use(Toast, toastOptions).mount('#app')
