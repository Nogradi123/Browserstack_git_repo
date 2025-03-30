# BrowserStack Challenge Test Suite (Node.js)

This repository contains a selenium-webdriver test suite that runs on BrowserStack.

## Test Description

The test suite verifies the following workflow:
1. Log into www.bstackdemo.com using dummy credentials
2. Filter the product view to show "Samsung" devices only
3. Favorite the "Galaxy S20+" device by clicking the yellow heart icon
4. Verify that the Galaxy S20+ is listed on the Favorites page

## Running in Parallel

The tests run across the following three browsers in parallel:
1. Windows 10 Chrome
2. macOS Ventura Firefox
3. Samsung Galaxy S22

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- BrowserStack account (free trial works fine)

## Local Development

For local development, create a `.env` file with the following content:

```
BROWSERSTACK_USERNAME=your_browserstack_username
BROWSERSTACK_ACCESS_KEY=your_browserstack_access_key
```

## Running Tests Locally

```bash
# Install dependencies
npm install

# Run tests
npm run browserstack-mocha-test
```



## BrowserStack Free Trial

1. Go to [BrowserStack](https://www.browserstack.com/) and sign up for a free trial
2. After signing up, go to Account > Settings to find your username and access key
3. Use these credentials in the `.env` file or Jenkins credentials
