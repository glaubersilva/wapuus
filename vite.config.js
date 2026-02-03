import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import * as esbuild from "esbuild";

/**
 * Plugin that transforms .js files containing JSX so Vite's import analysis
 * and the React plugin can handle them. (React plugin only treats .jsx/.tsx as JSX by default.)
 */
function jsxInJs() {
  return {
    name: "vite:jsx-in-js",
    enforce: "pre",
    async transform(code, id) {
      if (!id.includes("/src/") || !id.endsWith(".js")) return;
      if (!code.includes("<") || !code.includes(">")) return;
      const result = await esbuild.transform(code, {
        loader: "jsx",
        jsx: "automatic",
        format: "esm",
        target: "esnext",
        sourcefile: id,
        sourcemap: true,
      });
      return {
        code: result.code,
        ...(result.map && { map: result.map }),
      };
    },
  };
}

export default defineConfig({
  plugins: [jsxInJs(), react(), svgr()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.js"],
  },
});
