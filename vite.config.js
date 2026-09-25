import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { portfolio } from "./src/data/portfolio.js";

const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "portfolio-metadata",
      transformIndexHtml(html) {
        const { seo } = portfolio;
        return html
          .replace("__TITLE__", escape(seo.title))
          .replace("__DESCRIPTION__", escape(seo.description))
          .replace("__OG_TITLE__", escape(seo.title))
          .replace("__OG_DESCRIPTION__", escape(seo.description))
          .replace(
            "<!-- optional-meta -->",
            `${seo.url ? `<meta property="og:url" content="${escape(seo.url)}" /><link rel="canonical" href="${escape(seo.url)}" />` : ""}${seo.image ? `<meta property="og:image" content="${escape(seo.image)}" />` : ""}`,
          );
      },
    },
  ],
});
