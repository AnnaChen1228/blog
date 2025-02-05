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
  // 更新為你的 Vercel 網域，或者你的自定義網域
  site: 'https://your-project.vercel.app', // 部署後更新為實際的 Vercel URL
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
  // 確保沒有 base 路徑配置
});
