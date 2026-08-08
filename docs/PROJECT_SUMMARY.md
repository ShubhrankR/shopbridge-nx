# ShopBridge Project Summary & Command Reference

**ShopBridge** is an administrative inventory management web application developed as an Nx monorepo. It features an Angular 19 single-page frontend coupled with a NestJS 11 REST API backend, fully compatible with Node.js 20, 22, and 24 (`v24.19.0`), with automated deployment to GitHub Pages.

---

## Technical Stack Overview

| Category                 | Technology / Library                               | Version    | Purpose                                          |
| :----------------------- | :------------------------------------------------- | :--------- | :----------------------------------------------- |
| **Node.js Environment**  | Node.js Runtime                                    | `v24.19.0` | JavaScript runtime environment                   |
| **Monorepo Tooling**     | [Nx Workspace](https://nx.dev/)                    | `20.3.0`   | Monorepo management, task running & caching      |
| **Frontend Framework**   | [Angular](https://angular.io/)                     | `^19.1.0`  | Reactive SPA client interface                    |
| **Backend Framework**    | [NestJS](https://nestjs.com/)                      | `^11.0.0`  | Enterprise Node.js REST API framework            |
| **CI/CD & Hosting**      | GitHub Actions & GitHub Pages                      | Actions v4 | Automated build & static site hosting            |
| **UI Design System**     | Neumorphism & Tactile UI                           | Soft 3D    | Dual-shadow depth with Light/Dark mode switching |
| **Background Animation** | Interactive Canvas Physics                         | Custom     | Mouse-tracking spotlight & reactive particles    |
| **CSS System**           | [Tailwind CSS](https://tailwindcss.com/) & SCSS    | `^3.4.17`  | Utility-first responsive design system           |
| **Shared Library**       | TypeScript Interface Library (`@thinkbridge/data`) | ESM        | Shared models across API and Web client          |
| **TypeScript**           | [TypeScript](https://www.typescriptlang.org/)      | `~5.5.4`   | Strongly typed programming language              |
| **Unit Testing**         | [Jest](https://jestjs.io/)                         | `^29.7.0`  | Test execution runner for Angular & NestJS       |
| **E2E Testing**          | [Cypress](https://www.cypress.io/)                 | `^13.13.0` | Automated browser end-to-end testing             |
| **Linter / Formatter**   | ESLint & Prettier                                  | Standard   | Code style enforcement                           |

---

## Workspace Projects Summary

1. **`shop-bridge`** (`apps/shop-bridge`):
    - Angular 19 application providing admin UI for managing store products.
    - Soft Neumorphic Tactile Design System with Light/Dark mode switcher.
    - Mouse-tracking interactive canvas particle background animation.
    - Pages: Centered Landing page, Centered Inventory listing, Add inventory item, Edit inventory item, Delete inventory confirmation.
    - `DataService` featuring automatic `localStorage` fallback for live GitHub Pages static hosting.
2. **`api`** (`apps/api`):
    - NestJS 11 backend providing RESTful endpoints under `/api/inventory`.
    - Explicit `webpack.config.js` powered by `NxAppWebpackPlugin`.
    - In-memory array state management with duplicate item name checks and ID auto-generation.
3. **`data`** (`libs/data`):
    - TypeScript library exporting shared interfaces (`InventoryItemDataModel`) and payload classes (`InventoryItemPayloadModel`).
4. **`shop-bridge-e2e`** (`apps/shop-bridge-e2e`):
    - Cypress 13 suite testing end-to-end user workflows against `shop-bridge`.

---

## Command Reference

### Starting the Applications

- **Run Both Frontend & Backend Simultaneously**:

    ```bash
    npm run app
    ```

    _(Starts NestJS API on http://localhost:3333 and Angular SPA on http://localhost:4200 via Nx)_

- **Serve Apps Individually**:
    ```bash
    # Serve Angular Frontend
    npx nx serve shop-bridge

    # Serve NestJS Backend API
    npx nx serve api
    ```

---

### Building Projects

```bash
# Build Angular Frontend
npx nx build shop-bridge

# Build Angular Frontend for GitHub Pages
npx nx build shop-bridge --base-href=/shopbridge-nx/

# Build NestJS Backend
npx nx build api

# Build Shared Data Library
npx nx build data
```

---

### Code Verification & Testing

```bash
# Run Unit Tests across projects
npm run test           # Runs all Nx unit tests
npx nx test shop-bridge # Frontend unit tests
npx nx test api        # Backend unit tests
npx nx test data       # Library unit tests

# Run End-to-End Tests
npx nx e2e shop-bridge-e2e

# Run Code Formatting & Linting
npm run lint-me        # ESLint check across monorepo
npm run pretty-check   # Prettier check
npm run pretty-me      # Prettier automatic fix
```

---

## Recent Enhancements Summary

- **Automated GitHub Pages Deployment**: `.github/workflows/deploy-pages.yml` builds and publishes site to `https://shubhrankr.github.io/shopbridge-nx/`.
- **Soft Neumorphism & Tactile UI**: Physical dual-shadow extruded cards (`neu-card`) and recessed inset form controls (`neu-input`).
- **Full Light & Dark Theme Switcher**: Toggle button in header smoothly switches between Dark Graphite (`#0f1319`) and Light Warm Slate (`#e0e6f0`) page backgrounds with persistent `localStorage` saving.
- **Interactive Mouse-Tracking Animation**: Canvas spotlight glow & particle constellations track cursor movements over empty viewport space.
- **Clean Git Tracking & Lockfile**: Updated `.gitignore` excluding `.nx` / `.angular` caches, tracking `package-lock.json` for deterministic builds.
