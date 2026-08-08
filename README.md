# ShopBridge

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-6366f1?style=for-the-badge&logo=github)](https://shubhrankr.github.io/shopbridge-nx/home)

> **🌐 Live Interactive Demo**: Experience the web application deployed live on GitHub Pages:  
> 👉 **[https://shubhrankr.github.io/shopbridge-nx/home](https://shubhrankr.github.io/shopbridge-nx/home)**

This repository contains the full-stack codebase for **ShopBridge**, an Inventory Management monorepo built with Nx 20, Angular 19, NestJS 11, and Tailwind CSS featuring a **Soft Neumorphic & Tactile UI Design System** with an **Interactive Canvas Mouse-Tracking Animation** and a **Light / Dark Mode Theme Switcher**.

ShopBridge enables administrators to manage store inventory via full CRUD (Create, Read, Update, Delete) operations.

---

## 📚 Project Documentation

Detailed project and technical documentation is available in the [`docs/`](docs/) directory and project folders:

- **[System Architecture](docs/ARCHITECTURE.md)**: High-level design, component diagrams, Neumorphic UI engine, theme switcher, canvas animation, and data flow.
- **[REST API Specifications](docs/API_DOCUMENTATION.md)**: Full API endpoint schemas, request/response models, and error statuses.
- **[Project & Command Summary](docs/PROJECT_SUMMARY.md)**: Technology matrix, command reference (`serve`, `build`, `test`, `e2e`), and roadmap.
- **Project Specific READMEs**:
  - [Angular Frontend (`apps/shop-bridge`)](apps/shop-bridge/README.md)
  - [NestJS Backend API (`apps/api`)](apps/api/README.md)
  - [Shared Data Library (`libs/data`)](libs/data/README.md)
  - [Cypress E2E Testing (`apps/shop-bridge-e2e`)](apps/shop-bridge-e2e/README.md)

---

## Tech Stack & UI Specifications

- **Live Deployment**: Hosted on GitHub Pages ([https://shubhrankr.github.io/shopbridge-nx/home](https://shubhrankr.github.io/shopbridge-nx/home))
- **Node.js Environment**: Compatible with Node.js 20, 22, and 24 (`v24.19.0`)
- **Monorepo Management**: [Nx Workspace](https://nx.dev/) version 20 (`@nx/*`)
- **Frontend**: [Angular](https://angular.io/) version 19 (`@angular/*` ^19.1.0)
- **UI Design System**: Soft Neumorphism (Tactile extruded cards, recessed inset inputs, interactive push buttons)
- **Theme Switcher**: Dual Theme Engine (Light Mode Warm Slate & Dark Mode Graphite with `localStorage` persistence)
- **Background Animation**: Interactive HTML5 Canvas spotlight & particle constellation physics
- **Viewport Layout**: Centered spatial framework (`max-w-5xl mx-auto`)
- **Backend API**: [NestJS](https://nestjs.com/) version 11 (`@nestjs/*` ^11.0.0)
- **Styling Framework**: [Tailwind CSS](https://tailwindcss.com/) v3 & custom Neumorphic SCSS variables
- **Shared Data Contract**: TypeScript interface package (`@thinkbridge/data`)
- **Language**: TypeScript `~5.5.4`
- **Unit Testing**: [Jest](https://jestjs.io/) v29
- **E2E Testing**: [Cypress](https://www.cypress.io/) v13

---

## Quick Start Guide

### Prerequisites
- Node.js (v20, v22, or v24)
- npm package manager

### 1. Installation
```bash
npm install
```

### 2. Run Applications Locally
Run both the NestJS API (`http://localhost:3333`) and Angular Web Client (`http://localhost:4200`) concurrently:

```bash
npm run app
```

Open your browser and navigate to **`http://localhost:4200`**.

---

## Workspace Commands

| Task | Command | Description |
| :--- | :--- | :--- |
| **Serve All** | `npm run app` | Concurrently starts `api` and `shop-bridge` |
| **Serve Frontend** | `npx nx serve shop-bridge` | Starts Angular frontend on port 4200 |
| **Serve Backend** | `npx nx serve api` | Starts NestJS API on port 3333 |
| **Run Unit Tests** | `npm run test` | Runs Jest unit tests across monorepo |
| **Run E2E Tests** | `npx nx e2e shop-bridge-e2e` | Runs Cypress E2E integration tests |
| **Lint Code** | `npm run lint-me` | Checks ESLint rules across projects |
| **Format Code** | `npm run pretty-me` | Auto-formats codebase with Prettier |
