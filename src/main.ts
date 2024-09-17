import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index'
import App from './App.vue'
import mUI from './components'
import { toLine } from './utils'

const app = createApp(App)

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }

for (let i in ElementPlusIconsVue) {
    // 注册全部组件
    app.component(`el-icon-${toLine(i)}`, (ElementPlusIconsVue as any)[i])

}
app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
