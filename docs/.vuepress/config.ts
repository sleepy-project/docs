import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Sleepy Docs",
  description: "Sleepy Project 项目文档",

  head: [['link', { rel: 'icon', href: 'https://ghsrc.wyf9.top/icons/sleepy_icon_nobg.png' }]],

  public: "public",

  theme,

});
