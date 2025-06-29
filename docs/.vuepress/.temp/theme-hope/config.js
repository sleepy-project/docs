import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/sync/dev/sleepy-project/docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.93_@waline+client@3.5.7_markdown-it@14.1.0_sass-embedded@1_647ccdb80ddac5c57bf3334c33be7408/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.109_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0_3cf65fd62e33d86f3b57a91819b60608/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.109_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_e73ab248a7064ff28fb402415d51e052/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.109_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_e73ab248a7064ff28fb402415d51e052/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.109_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_e73ab248a7064ff28fb402415d51e052/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/sync/dev/sleepy-project/docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.93_@waline+client@3.5.7_markdown-it@14.1.0_sass-embedded@1_647ccdb80ddac5c57bf3334c33be7408/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);


  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
