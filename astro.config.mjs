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
  site: 'https://annachen1228.github.io', // 移除 /blog
  base: '/blog',
  output: 'static',
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
  server: {
    host: '0.0.0.0',
    port: 4321
  },
  devToolbar: {
    enabled: false,
  },
});
