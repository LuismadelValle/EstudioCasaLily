import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "xbu22y",
  e2e: {
    baseUrl: 'http://localhost:8080/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
