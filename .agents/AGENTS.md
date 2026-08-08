# AGENTS.md - Antigravity AI Project Instructions & Context 🚀

This document defines the technical architecture, design system, mandatory rules, and operational guidelines for **Antigravity AI** assistants working on the **ShopBridge** Nx monorepo codebase.

---

## 📌 Project Summary

**ShopBridge** is an Inventory Management full-stack monorepo built with **Nx 20**, **Angular 19**, **NestJS 11**, and **Tailwind CSS**. It features a **Soft Neumorphic & Tactile UI Design System**, an interactive mouse-tracking HTML5 Canvas background animation, and dual theme support (Light Warm Slate / Dark Graphite).

### 🌐 Key Links & Live Demo
* **Live Demo**: [https://shubhrankr.github.io/shopbridge-nx/home](https://shubhrankr.github.io/shopbridge-nx/home)
* **Monorepo Manager**: Nx Workspace 20
* **Frontend App**: `apps/shop-bridge` (Angular 19, Tailwind CSS v3)
* **Backend App**: `apps/api` (NestJS 11)
* **Shared Contract Library**: `libs/data` (`@thinkbridge/data`)
* **E2E Integration Testing**: `apps/shop-bridge-e2e` (Cypress 13)

---

## 🏗️ Architecture & Monorepo Structure

```
/home/shubhrank_rastogi/WORKSPACE/PROJECTS/my_projects/shopbridge-nx/
├── apps/
│   ├── shop-bridge/                # Angular 19 Frontend Web Client
│   │   ├── src/app/
│   │   │   ├── components/         # Standalone UI components (Navbar, ItemCard, FormModal, Canvas, etc.)
│   │   │   ├── services/           # InventoryService, ThemeService, CanvasAnimationService
│   │   │   ├── app.component.ts    # Root layout component
│   │   │   └── app.routes.ts       # Router configuration
│   │   └── src/styles.scss         # Tailwind CSS & Neumorphic SCSS design system
│   ├── api/                        # NestJS 11 Backend REST API
│   │   └── src/app/
│   │       ├── items/              # Items CRUD Module, Controller, Service & Data Store
│   │       └── app.module.ts       # Root NestJS Module
│   └── shop-bridge-e2e/            # Cypress E2E Integration Test Suite
├── libs/
│   └── data/                       # Shared TypeScript Interfaces (@thinkbridge/data)
│       └── src/lib/item.interface.ts # Item & CreateItemDto interfaces
├── docs/                           # ARCHITECTURE.md, API_DOCUMENTATION.md, PROJECT_SUMMARY.md
└── package.json                    # Workspace dependencies & root scripts
```

---

## ⚠️ Mandatory AI Rules & Coding Directives

### 1. 🔒 Git & Security Rules
> [!CAUTION]
> **NEVER EXECUTE GIT PUSH**: AI assistants MUST NEVER execute `git push` or attempt to push any commits/branches to remote repositories without explicit user permission.

### 2. 🟢 Environment & Command Standard
> [!IMPORTANT]
> Always run commands using Node.js `v24.19.0` via nvm:
> ```bash
> export NVM_DIR="$HOME/.nvm"
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
> nvm use 24.19.0
> ```
> Core monorepo commands:
> - **Build Monorepo**: `npx nx run-many -t build`
> - **Serve Both Client & API**: `npm run app` (starts API on `:3333` and Frontend on `:4200`)
> - **Serve Frontend**: `npx nx serve shop-bridge`
> - **Serve Backend**: `npx nx serve api`
> - **Run Tests**: `npm run test` or `npx nx run-many -t test`

### 3. 🅰️ Frontend Standards (Angular 19)
* **100% Standalone Components**: All components, directives, and pipes must be `standalone: true`. Do NOT create `NgModules`.
* **Angular Signals**: Use Signals (`signal()`, `computed()`, `input()`, `output()`) for reactive state management across components and services.
* **Control Flow Blocks**: Always use native Angular template control flow (`@if`, `@else`, `@for (item of items; track item.id)`).
* **Soft Neumorphic Design**: Retain Neumorphic CSS properties (`shadow-neu-flat`, `shadow-neu-pressed`, `shadow-neu-convex`) and ensure tactile interactive states on buttons and card containers.

### 4. 🦁 Backend Standards (NestJS 11)
* **Module Structure**: Keep domain logic encapsulated in dedicated NestJS modules (`ItemsModule`).
* **Shared Data Types**: Always import shared data interfaces from `@thinkbridge/data` (`import { Item } from '@thinkbridge/data'`). Do NOT duplicate interface definitions.
* **REST Best Practices**: Standard HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`), consistent status codes (`200 OK`, `201 Created`, `404 Not Found`), and structured error payloads.

---

## 🧪 Verification & Quality Control

Before marking any task as complete:
1. Load Node environment `24.19.0`.
2. Run full monorepo build:
   ```bash
   export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 24.19.0 && npx nx run-many -t build
   ```
3. Confirm that both `shop-bridge` and `api` compile cleanly with **0 errors**.
