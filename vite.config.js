import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/PWA/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      workbox: {
        navigateFallback: "index.html",
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg}"],
      },
      manifest: {
        name: "App React",
        short_name: "React",
        description: "App React+Vite PWA",
        start_url: "./",
        scope: "./",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#228be6",
        screenshots: [
          {
            src: "screenshot/Danios_Luz_640.jpg",
            sizes: "640x640",
            type: "image/jpeg",
            form_factor: "wide",
          },
          {
            src: "screenshot/Proanio_640.jpg",
            sizes: "640x640",
            type: "image/jpeg",
            form_factor: "narrow",
          },
        ],
        icons: [
          {
            src: "icons/microfono.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/rock-and-roll.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
