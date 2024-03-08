// index.ts
import type { App } from 'vue'
import mgButton from './src/mg-button.vue'
// 使用install方法，在app.use挂载
mgButton.install = (app: App) => {
    app.component(mgButton.__name as string, mgButton) //注册组件
}
export default mgButton