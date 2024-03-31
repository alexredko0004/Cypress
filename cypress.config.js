const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  env: {...process.env},
  e2e: {
    baseUrl: 'https://www.kaggle.com',
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 2000,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
