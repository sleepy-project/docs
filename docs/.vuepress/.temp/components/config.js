import { hasGlobalComponent } from "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.109_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_e73ab248a7064ff28fb402415d51e052/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/sync/dev/sleepy-project/docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.90_sass-embedded@1.89.2_vuepress@2.0.0-rc.23_@vuepr_f49588799aae893d401caf534963f611/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/sync/dev/sleepy-project/docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.90_sass-embedded@1.89.2_vuepress@2.0.0-rc.23_@vuepr_f49588799aae893d401caf534963f611/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/sync/dev/sleepy-project/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.109_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@_e73ab248a7064ff28fb402415d51e052/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
