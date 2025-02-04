import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  site: 'annachen1228.github.io',
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
  server: {
    host: '0.0.0.0', // 允許從容器外部訪問
    port: 4321
  },
  devToolbar: {
    enabled: false,
  },
});
