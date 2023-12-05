// main.js 入口文件
import { createApp } from 'vue'

import App from './App.vue'
// 为什么要挂载，js DOM 低效率 #app Vue 开创新世界 mvvm的世界
// 原生js 不支持mvvm
createApp(App).mount('#app')
