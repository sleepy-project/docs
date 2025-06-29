import { hasGlobalComponent } from "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.109_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_e73ab248a7064ff28fb402415d51e052/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vueuse+core@13.4.0_vue@3.5.17/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.109_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vuepress+bu_25501e7551fd0abfa4cad179a847390d/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
