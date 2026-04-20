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
      ["/v6/"]: [
        { text: "Sleepy v6", link: "/v6/" },
        { text: "快速开始", link: "/v6/getting-started" },
        { text: "配置文件", link: "/v6/configuration" },
        { text: "插件开发", link: "/v6/plugin-development"}
      ]
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
        forceLocale: true,
      },
    },
  },

    // 搜索功能 https://vitepress.dev/zh/reference/default-theme-search
    search: {
      provider: 'local'
      options: {
        locales: {
          root: { // 如果你想翻译默认语言，请将此处设为 `root`
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '无结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                    }
                  }
                }
              }
            }
          }
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
            dateStyle: 'full',
            timeStyle: 'medium',
            forceLocale: true,
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
