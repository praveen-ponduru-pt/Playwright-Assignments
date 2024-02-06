// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({

  path: `.env`,
  override: true
});

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  // testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'retain-on-failure',
  },


  projects: [

    {
      name: 'Automation Exercise',
      fullyParallel: false,
      testDir: './tests',
      use: {
        ...devices['Desktop Chrome'],
        headless: false
      }
    }
  ]
});

