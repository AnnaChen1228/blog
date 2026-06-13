import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  // 部署在根路徑（無 base），連結維持 /xxx；BASE_URL 會是 "/"
  site: 'https://annachen1228.github.io',
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
  // 開發環境的設置
  server: {
    host: '0.0.0.0',
    port: 4321
  },
  devToolbar: {
    enabled: false,
  },
  // 添加輸出配置
  output: 'static',
});
