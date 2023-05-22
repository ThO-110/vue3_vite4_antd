import { createApp } from 'vue'
import Antd from 'ant-design-vue'

import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.less'
import './assets/main.css'
import '@/style/index.less'

const app = createApp(App)

app.use(Antd)

app.use(router)

app.mount('#app')
