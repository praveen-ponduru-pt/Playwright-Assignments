// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    {
      name: 'Login functionality',
      // testMatch: 'Assignment-15/softAssertions.spec.js',
      testMatch: 'tests/login.spec.js',
      fullyParallel: true,
      retries: 0,

      use: {
        ...devices['Desktop Chrome'],
        trace: 'on',
        headless: true,
      }
    },

    {
      name: 'Navigation to Admin',
      testMatch: 'tests/navigation.spec.js',
      fullyParallel: false,
      retries: 2,

      use: {
        ...devices['Desktop Firefox'],
        trace: 'on-first-retry',
        headless: false,
      }
    },

    {
      name: 'Other tests',
      testIgnore: 'tests/navigation.spec.js' || 'tests/login.spec.js',
      fullyParallel: false,
      retries: 0,

      use: {
        ...devices['Desktop Chrome'],
        trace: 'on-first-retry',
        headless: false,
      }
    }
  ]
});

