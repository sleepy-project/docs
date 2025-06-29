import { CodeTabs } from "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.109_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vue_c25bc3a675efa58c05689796595d18be/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.109_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vue_c25bc3a675efa58c05689796595d18be/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.109_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vue_c25bc3a675efa58c05689796595d18be/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
