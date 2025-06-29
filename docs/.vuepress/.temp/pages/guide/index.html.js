import comp from "/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文档\",\"icon\":\"book\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"文档\\\",\\\"image\\\":[\\\"https://api.star-history.com/svg?repos=sleepy-project/sleepy&type=Date\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"SleepyProject\\\",\\\"url\\\":\\\"https://github.com/sleepy-project/docs\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://sleepy.siiway.top/guide/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Sleepy Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文档\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://api.star-history.com/svg?repos=sleepy-project/sleepy&type=Date\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":1.06,\"words\":317},\"filePathRelative\":\"guide/README.md\"}")
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
