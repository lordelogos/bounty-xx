import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@ui",
        replacement: fileURLToPath(
          new URL("./src/components/ui", import.meta.url)
        ),
      },
    ],
  },
  plugins: [react()],
});
