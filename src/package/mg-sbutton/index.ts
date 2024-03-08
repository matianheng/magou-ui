// index.ts
import type { App } from 'vue'
import mgSbutton from "./src/MgSbutton.vue"

// 使用install方法，在app.use挂载
mgSbutton.install = (app: App) => {
    app.component(mgSbutton.__name as string, mgSbutton) //注册组件
}
  
export default mgSbutton
