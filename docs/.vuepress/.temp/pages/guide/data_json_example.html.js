import comp from "/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/data_json_example.html.vue"
const data = JSON.parse("{\"path\":\"/guide/data_json_example.html\",\"title\":\"data.json example\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"data.json example\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"data.json example\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"SleepyProject\\\",\\\"url\\\":\\\"https://github.com/sleepy-project/docs\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://sleepy.siiway.top/guide/data_json_example.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Sleepy Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"data.json example\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"data.json example\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.16,\"words\":49},\"filePathRelative\":\"guide/data_json_example.md\",\"autoDesc\":true}")
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
