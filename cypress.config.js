const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.anapioficeandfire.com/api",
    specPattern: "cypress/api-tests/*.spec.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
