import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    return {
      plugins: [react(), dts({ include: ["src/lib"] })],
      build: {
        lib: {
          entry: resolve(__dirname, "src/lib/index.ts"),
          name: "AskChatGPTReact",
          fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  }

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
  };
});
