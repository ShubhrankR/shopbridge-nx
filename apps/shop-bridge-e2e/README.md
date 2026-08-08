# ShopBridge End-to-End Test Suite (`apps/shop-bridge-e2e`)

This application contains automated Cypress end-to-end (E2E) integration tests for the **ShopBridge** web application.

## Overview

The tests verify complete browser user flows such as loading inventory items, creating new items, updating item details, and deleting records.

## Project Structure

```
apps/shop-bridge-e2e/
├── src/
│   ├── fixtures/               # Mock test data fixtures
│   ├── integration/            # Cypress test specification files (.spec.ts)
│   └── support/                # Custom Cypress commands and support files
├── cypress.json                # Cypress runner settings & baseUrl configuration
└── project.json                # Nx E2E target definition
```

## Running E2E Tests

Ensure the application environment (`npm run app` or `nx serve shop-bridge` + `nx serve api`) is active, then execute:

```bash
# Run headless Cypress tests
nx e2e shop-bridge-e2e

# Run with interactive Cypress GUI
nx e2e shop-bridge-e2e --watch
```
