import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/app.ts"],
  outDir: "dist",
  format: ["esm"],
  target: "es2022",
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: false,
  onSuccess: "node dist/app.js",
});