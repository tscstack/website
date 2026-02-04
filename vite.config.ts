import { fileURLToPath, URL } from "node:url";

import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

import mdx from "fumadocs-mdx/vite";
import * as MdxConfig from "./source.config";

const config = defineConfig({
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  plugins: [
    mdx(MdxConfig),
    devtools(),
    netlify(),
    viteTsConfigPaths({
      projects: ["./tsconfig.json"]
    }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true
      },
      sitemap: {
        enabled: false,
        host: "indieship.xyz"
      }
    }),
    viteReact()
  ]
});

export default config;
