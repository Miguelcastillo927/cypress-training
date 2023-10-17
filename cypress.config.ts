import { defineConfig } from "cypress";

module.exports = defineConfig({
  
  e2e: {
    
    video: false,
    screenshotOnRunFailure: false,  
    setupNodeEvents(on, config) {},
    baseUrl: "https://www.demoblaze.com/index.html",
    defaultCommandTimeout: 90000,
    pageLoadTimeout: 90000,
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
  reporterEnabled: "mochawesome",
  mochawesomeReporterOptions: {
    reportDir: "cypress/reports/mocha",
    quite: true,
    overwrite: false,
    html: false,
    json: true,
  },
},
});