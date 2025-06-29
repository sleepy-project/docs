import comp from "/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/best_practice.html.vue"
const data = JSON.parse("{\"path\":\"/guide/best_practice.html\",\"title\":\"优化站点\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"优化站点\",\"icon\":\"sliders\",\"description\":\"Best Practice 添加访问量统计 提示 请确保你启用了 metrics 功能，否则无法正常使用 更精确的访问量请使用专门的统计工具 (如 umami) 很简单，只需要在 sleepy_page_more_text 环境变量中添加特殊的占位符: {visit_today}: 今日的访问量 (即 / 的访问次数) {visit_month}: 本...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"优化站点\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"SleepyProject\\\",\\\"url\\\":\\\"https://github.com/sleepy-project/docs\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://sleepy.siiway.top/guide/best_practice.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Sleepy Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"优化站点\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Best Practice 添加访问量统计 提示 请确保你启用了 metrics 功能，否则无法正常使用 更精确的访问量请使用专门的统计工具 (如 umami) 很简单，只需要在 sleepy_page_more_text 环境变量中添加特殊的占位符: {visit_today}: 今日的访问量 (即 / 的访问次数) {visit_month}: 本...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.49,\"words\":147},\"filePathRelative\":\"guide/best_practice.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
