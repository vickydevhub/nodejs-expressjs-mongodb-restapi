import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",   // needed for Express + Node.js
    coverage: {
      reporter: ["text", "json", "html"],
        },
        setupFiles: "./tests/setupTestEnv.js", // <- setup entry
  },
});
