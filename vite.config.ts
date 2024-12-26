import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => ({
  server: { fs: { allow: [".", "../shared"] } },
  build: {
    target: "chrome89",
  },
  plugins: [
    federation({
      name: "host",
      remotes: {
        partsApp: {
          type: "module",
          name: "partsApp",
          entry: "http://localhost:8081/remoteEntry.js",
          entryGlobalName: "partsApp",
          shareScope: "default",
        },
        soApp: {
          type: "module",
          name: "soApp",
          entry: "http://localhost:8082/remoteEntry.js",
          entryGlobalName: "soApp",
          shareScope: "default",
        },
      },
      exposes: {},
      filename: "remoteEntry.js",
      shared: {
        react: {
          singleton: true,
        },
      },
    }),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Fullbay",
        short_name: "Fullbay",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
}));
