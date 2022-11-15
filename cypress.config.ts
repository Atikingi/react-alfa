import { defineConfig } from 'cypress'

export default defineConfig({
  "component": {
    "devServer": {
      "framework": "create-react-app",
      "bundler": "webpack"
    }
  },

  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  }
})