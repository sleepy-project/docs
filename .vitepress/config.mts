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
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "主页", link: "/" }],

    sidebar: {
      ["/v5/"]: [
        { text: "Sleepy v5", link: "/v5/" },
        { text: "快速开始", link: "/v5/getting-started" },
        { text: "配置指南", link: "/v5/configuration" },
        { text: "部署指南", link: "/v5/deployment" },
        { text: "插件开发", link: "/v5/plugin-development" },
        { text: "API 文档", link: "/v5/apis" },
        { text: "GitHub", link: "https://github.com/sleepy-project" },
      ],
      ["/en_us/v5/"]: [
        { text: "Sleepy v5", link: "/v5/" },
        // needs more
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
