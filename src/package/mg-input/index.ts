// index.ts
import type { App } from 'vue'
import mgInput from './src/mg-input.vue'
// 使用install方法，在app.use挂载
mgInput.install = (app: App) => {
    app.component(mgInput.__name as string, mgInput) //注册组件
}
  
export default mgInput
