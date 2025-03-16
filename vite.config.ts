import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Check if we're in test mode
  const isTest = mode === "test";

  return {
    plugins: [
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
      // Only use federation plugin when not testing
      ...(!isTest
        ? [
            federation({
              name: "host",
              manifest: true,
              remotes: {
                section1: {
                  type: "module",
                  name: "section1",
                  entry: "http://localhost:9001/remoteEntry.js",
                },
                section2: {
                  type: "module",
                  name: "section2",
                  entry: "http://localhost:9002/remoteEntry.js",
                },
              },
              shared: {
                react: { singleton: true },
                "react-dom": {
                  singleton: true,
                },
                i18next: {
                  singleton: true,
                },
              },
            }),
          ]
        : []),
    ],
    build: {
      target: "esnext",
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
    },
  };
});
