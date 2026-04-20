import DefaultTheme from 'vitepress/theme'
import MyLayout from './Layout.vue' // 导入 Layout.vue

export default {
  extends: DefaultTheme,
  // 使用自定义的 Layout 组件
  Layout: MyLayout
}
