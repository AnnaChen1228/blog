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
  site: 'https://annachen1228.github.io',
  base: '/blog',
  outDir: './dist', // 明確指定輸出目錄
  trailingSlash: 'always', // 確保 URL 結尾有斜線
  output: 'static',
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
  build: {
    assets: '_assets' // 指定資產目錄
  },
  server: {
    host: '0.0.0.0',
    port: 4321
  },
  devToolbar: {
    enabled: false,
  },
});
