import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sleepy Project",
  titleTemplate: "Sleepy Docs",
  description: "一个优雅的在线状态展示项目",
  base: "/",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "主页", link: "/" }],

    sidebar: {
      ["/v5/"]: [
        { text: "Sleepy v5", link: "/v5/" },
        {
          text: "用户文档",
          collapsed: false,
          items: [
            { text: "部署指南", link: "/v5/deploy" },
            { text: "配置说明", link: "/v5/config" },
            { text: "HTTPS配置", link: "/v5/https" },
            { text: "更新指南", link: "/v5/update" },
          ],
        },
        {
          text: "开发者文档",
          collapsed: false,
          items: [
            // 待添加
          ],
        },
        { text: "GitHub", link: "https://github.com/sleepy-project" },
      ],
      ["/en_us/v5/"]: [
        { text: "Sleepy v5", link: "/en_us/v5/" },
        {
          text: "User Documentation",
          collapsed: false,
          items: [
            { text: "Deployment", link: "/en_us/v5/deploy" },
            { text: "Configuration", link: "/en_us/v5/config" },
            { text: "HTTPS Setup", link: "/en_us/v5/https" },
            { text: "Update Guide", link: "/en_us/v5/update" },
          ],
        },
        {
          text: "Developer Documentation",
          collapsed: false,
          items: [
            // 待添加
          ],
        },
        { text: "GitHub", link: "https://github.com/sleepy-project" },
      ],
    },

    socialLinks: [
      { icon: "qq", link: "https://sleepy.wss.moe/qq" },
      { icon: "telegram", link: "https://sleepy.wss.moe/tgc" },
      { icon: "discord", link: "https://sleepy.wss.moe/dc" },
      { icon: "github", link: "https://github.com/sleepy-project" },
    ],

    editLink: {
      pattern: "https://github.com/sleepy-project/docs/edit/main/:path",
      text: "在 GitHub 上编辑本页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "full",
      },
    },
  },

  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
    },
    en_us: {
      label: "English",
      lang: "en",
      link: "/en_us/",

      title: "Sleepy Project",
      description: "Elegant online status display",

      themeConfig: {
        nav: [{ text: "Home", link: "/en_us/" }],

        socialLinks: [
          { icon: "telegram", link: "https://sleepy.wss.moe/tgc" },
          { icon: "discord", link: "https://sleepy.wss.moe/dc" },
          { icon: "github", link: "https://github.com/sleepy-project" },
        ],

        editLink: {
          pattern: "https://github.com/sleepy-project/docs/edit/main/:path",
          text: "Edit this page on GitHub",
        },

        lastUpdated: {
          text: "Last updated at",
          formatOptions: {
            dateStyle: "full",
            timeStyle: "full",
          },
        },
      },
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
});
