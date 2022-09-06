import { createApp } from 'vue'
import App from './App.vue'
import Button from '@lauavinyo/poc-lib'
import "@lauavinyo/poc-lib/dist/style.css"

import './assets/main.css'

const app = createApp(App)

app.use(Button)
app.mount('#app')