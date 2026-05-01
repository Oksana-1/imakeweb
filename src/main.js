import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/app.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

AOS.init()

app.mount('#app')
