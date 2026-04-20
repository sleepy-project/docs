import DefaultTheme from 'vitepress/theme'
import MyLayout from '../Layout.vue' // 导入你刚创建的 Layout.vue

export default {
  extends: DefaultTheme,
  // 使用自定义的 Layout 组件
  Layout: MyLayout
}
