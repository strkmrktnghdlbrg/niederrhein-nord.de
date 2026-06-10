import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://niederrhein-nord.de",
  output: "static",
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/impressum") &&
        !page.includes("/datenschutz") &&
        !page.includes("/agb") &&
        !page.includes("/404") &&
        !page.includes("/werben") &&
        !page.includes("/en/imprint") &&
        !page.includes("/en/privacy") &&
        !page.includes("/en/terms"),
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
