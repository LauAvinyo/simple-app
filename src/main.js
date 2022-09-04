import { createApp } from 'vue'
import App from './App.vue'
import Button from 'poc-lib'
import "poc-lib/dist/style.css"

import './assets/main.css'

const app = createApp(App)
app.mount('#app')
app.use(Button)
