export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页","icon":"house"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"文档","icon":"book"} }],
  ["/guide/api.html", { loader: () => import(/* webpackChunkName: "guide_api.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/api.html.js"), meta: {"title":"API","icon":"hexagon-nodes"} }],
  ["/guide/best_practice.html", { loader: () => import(/* webpackChunkName: "guide_best_practice.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/best_practice.html.js"), meta: {"title":"优化站点","icon":"sliders"} }],
  ["/guide/data_json_example.html", { loader: () => import(/* webpackChunkName: "guide_data_json_example.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/data_json_example.html.js"), meta: {"title":"data.json example"} }],
  ["/guide/deploy.html", { loader: () => import(/* webpackChunkName: "guide_deploy.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/deploy.html.js"), meta: {"title":"部署","icon":"cube"} }],
  ["/guide/env.html", { loader: () => import(/* webpackChunkName: "guide_env.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/env.html.js"), meta: {"title":"配置项说明","icon":"gears"} }],
  ["/guide/https.html", { loader: () => import(/* webpackChunkName: "guide_https.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/https.html.js"), meta: {"title":"HTTPS 配置指南","icon":"shield-halved"} }],
  ["/guide/preview.html", { loader: () => import(/* webpackChunkName: "guide_preview.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/preview.html.js"), meta: {"title":"演示站点","icon":"film","order":1} }],
  ["/guide/update.html", { loader: () => import(/* webpackChunkName: "guide_update.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/guide/update.html.js"), meta: {"title":"更新","icon":"up-long"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/sync/dev/sleepy-project/docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
