import comp from "/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/env.html.vue"
const data = JSON.parse("{\"path\":\"/guide/env.html\",\"title\":\"配置项说明\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"gears\",\"description\":\"配置项说明 有两种方式修改配置: 环境变量 (优先级最高) 与 server.py 同级的 .env 文件 重要 (特别是) Windows 用户请确保 .env 文件使用 UTF-8 编码保存，否则会导致错误读入注释 / 中文乱码 Huggingface / Vercel 等容器平台部署需将环境变量放在 Environment Variables，而...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"配置项说明\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"SleepyProject\\\",\\\"url\\\":\\\"https://github.com/sleepy-project/docs\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://sleepy.siiway.top/guide/env.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Sleepy Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"配置项说明\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"配置项说明 有两种方式修改配置: 环境变量 (优先级最高) 与 server.py 同级的 .env 文件 重要 (特别是) Windows 用户请确保 .env 文件使用 UTF-8 编码保存，否则会导致错误读入注释 / 中文乱码 Huggingface / Vercel 等容器平台部署需将环境变量放在 Environment Variables，而...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":3.78,\"words\":1133},\"filePathRelative\":\"guide/env.md\",\"autoDesc\":true}")
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
