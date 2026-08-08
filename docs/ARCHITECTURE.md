# ShopBridge System Architecture

This document provides a technical overview of the architecture, design patterns, data flow, directory structure, and UI animation/theme engine of the **ShopBridge** workspace.

---

## 1. High-Level Architecture Overview

ShopBridge is built as an **Nx Monorepo** containing a full-stack e-commerce inventory management system. It separates concerns between the web frontend, backend microservice, shared data contract libraries, and end-to-end testing suites.

```mermaid
graph TD
    subgraph Frontend Layer
        SB[apps/shop-bridge<br/>Angular 19 SPA<br/>Neumorphic UI + Theme Engine + Canvas Animation]
    end

    subgraph Data Contract Layer
        DATA[libs/data<br/>Shared Models & Interfaces]
    end

    subgraph Backend Layer
        API[apps/api<br/>NestJS 11 REST API]
    end

    subgraph E2E Testing Layer
        E2E[apps/shop-bridge-e2e<br/>Cypress Suite]
    end

    SB -->|Imports Models| DATA
    API -->|Imports Models| DATA
    SB -->|HTTP REST Requests /api/inventory| API
    E2E -->|Tests Application| SB
```

---

## 2. Directory Structure & Workspace Layout

```
shopbridge-nx/
├── apps/
│   ├── api/                    # NestJS 11 Backend Application
│   │   ├── src/
│   │   │   ├── app/            # App Module, Controller, Service
│   │   │   └── main.ts         # Server Bootstrapper (Port 3333, Global Prefix 'api')
│   │   └── project.json        # Nx Project Configuration (Webpack Bundler)
│   │
│   ├── shop-bridge/            # Angular 19 Frontend Application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── core/       # Core Angular Services & Shell Components
│   │   │   │   ├── data/       # Data Access Services (HttpClient)
│   │   │   │   ├── layout/     # Neumorphic Shell, Header, Footer & Canvas Animation
│   │   │   │   ├── shared/     # Reusable UI components (Page Loader)
│   │   │   │   └── modules/    # Feature Modules (Landing, List, Add, Edit, Delete)
│   │   │   └── styles.scss     # Neumorphic SCSS Design System & Dual-Theme Variables
│   │   ├── proxy.conf.json     # Dev Server Proxy (/api -> http://localhost:3333)
│   │   └── project.json        # Nx Project Configuration
│   │
│   └── shop-bridge-e2e/        # Cypress 13 End-to-End Test Suite
│       └── src/integration/    # Automated user workflow tests
│
├── libs/
│   └── data/                   # Shared TypeScript Library (@thinkbridge/data)
│       └── src/lib/            # Inventory Data Models & Interfaces
│
├── docs/                       # Project Architecture & API Specifications
├── .gitignore                  # Git Ignore Rules (Excludes .nx and .angular caches)
├── nx.json                     # Nx Monorepo Configuration
├── package.json                # Project Dependencies & Scripts
└── tsconfig.base.json          # TypeScript Compiler & Path Mappings (@thinkbridge/data)
```

---

## 3. UI Design System, Theme Engine & Animation Physics

### A. Soft Neumorphic Tactile Design Pattern

The frontend uses a **Soft Neumorphic & Tactile UI Pattern** with a centered spatial layout:

- **Extruded Card Surfaces (`.neu-card`, `.neu-card-sm`)**: Dual-shadow 3D soft cards providing physical depth.
- **Recessed Inset Inputs (`.neu-input`)**: Inset soft inner shadows for form inputs and status badges.
- **Tactile Push Buttons (`.neu-btn`, `.neu-btn-primary`, `.neu-btn-emerald`, `.neu-btn-rose`)**: Interactive buttons with physical push states (`active:scale-95`).

### B. Dual-Theme Engine (Light / Dark Mode Switcher)

- **Dark Mode (Default)**: Deep graphite background (`#0f1319`), dark dual shadows (`#0a0d12` / `#242a36`), light primary text.
- **Light Mode**: Warm soft slate background (`#e0e6f0`), light dual shadows (`#babecc` / `#ffffff`), dark primary text.
- **State Persistence**: Theme choice is persisted in `localStorage` under `shopbridge_theme` and applied via `.dark` / `.light` root classes.

### C. Interactive Mouse-Tracking Background Animation

- `WrapperComponent` embeds a fixed background HTML5 canvas overlay (`#bgCanvas`).
- **Cursor Spotlight Glow**: Smooth radial gradient spotlight follows mouse position across empty space (`window:mousemove`).
- **Reactive Particle Constellations**: Floating ambient particles drift dynamically and form subtle constellation connecting lines when the mouse pointer moves nearby.

---

## 4. Key Design Patterns

1. **Monorepo Code Sharing**: Shared models defined in `libs/data` are compiled once and imported via TypeScript path `@thinkbridge/data`.
2. **Centered Viewport Framework**: `wrapper.component.html` frames all views into a centered max-width container (`max-w-5xl mx-auto w-full min-h-screen flex flex-col justify-between items-center py-6 px-4`).
3. **Lazy-Loaded Angular Feature Modules**: Features like `add-inventory`, `edit-inventory`, and `list-inventory` are lazy-loaded with dedicated routing modules.
4. **In-Memory REST CRUD Abstraction**: NestJS service encapsulates data manipulations, returning typed validation errors (`404 Not Found`, `422 Unprocessable Entity`).
