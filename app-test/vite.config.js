import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@mylib": fileURLToPath(
        new URL("../vue3-component-library", import.meta.url)
      ),
      "@vue-plugin-test": fileURLToPath(
        new URL("../vue-plugin-test", import.meta.url)
      ),
    },
  },
});
