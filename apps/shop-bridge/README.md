# ShopBridge Web Frontend Application (`apps/shop-bridge`)

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-6366f1?style=for-the-badge&logo=github)](https://shubhrankr.github.io/shopbridge-nx/home)

> **🌐 Live Interactive Demo**: [https://shubhrankr.github.io/shopbridge-nx/home](https://shubhrankr.github.io/shopbridge-nx/home)

This project is the web client application for **ShopBridge**, built with [Angular 19](https://angular.io/), styled using a **Soft Neumorphic & Tactile UI Pattern** with [Tailwind CSS](https://tailwindcss.com/) and features an **Interactive Canvas Mouse-Tracking Animation** and **Light / Dark Mode Theme Switcher**.

## Overview

The `shop-bridge` application provides an administrative dashboard interface for users to perform CRUD operations on store inventory.

## Project Structure

```
apps/shop-bridge/src/app/
├── core/                               # Core services and singleton providers
├── data/                               # Angular HTTP DataService interacting with backend API (with localStorage fallback)
├── layout/                             # Application shell & Neumorphic layout components
│   ├── core/                           # Header (Theme Switcher), Footer, Centered Wrapper (Canvas Animation)
│   └── modules/                        # Lazy-loaded feature modules
│       ├── landing/                    # Welcome / home page component
│       ├── list-inventory/             # Inventory listing & Neumorphic data table
│       ├── add-inventory/              # Add new inventory item component
│       └── edit-inventory/             # Edit & Delete item management pages
├── shared/                             # Shared components (Page Loader), directives, and pipes
├── app-routing.module.ts               # Root navigation routing module
├── app.component.ts                    # Root component
└── app.module.ts                       # Application main module
```

## Features & Highlights

1. **Live GitHub Pages Deployment**: Hosted live at [https://shubhrankr.github.io/shopbridge-nx/home](https://shubhrankr.github.io/shopbridge-nx/home).
2. **Soft Neumorphism & Tactile UI**: Extruded card surfaces (`neu-card`), recessed inset form inputs (`neu-input`), and tactile buttons (`neu-btn`).
3. **Full Light & Dark Theme Switcher**: Switch seamlessly between Dark Neumorphic Graphite (`#0f1319`) and Light Neumorphic Warm Slate (`#e0e6f0`) backgrounds via the header toggle button. Theme choice persists in `localStorage`.
4. **Interactive Mouse-Tracking Animation**: Canvas spotlight glow & particle constellations track cursor movements over empty viewport space.
5. **Centered Viewport Spatial Layout**: Responsive centered max-width frame (`max-w-5xl mx-auto`).
6. **Landing Page**: Overview and quick links to manage store inventory.
7. **Inventory Table (`/list`)**: Displays items with details (name, description, price) and edit action buttons.
8. **Add Item Form (`/add`)**: Form to create new inventory items with validation.
9. **Edit / Delete Item (`/edit/:id`)**: Update item parameters or trigger item deletion confirmation.

## Running the Application

To serve the Angular frontend locally:

```bash
# Serve Angular SPA via Nx
npx nx serve shop-bridge
```

Open your browser at **`http://localhost:4200`**.

> **Note**: API requests dispatched to `/api/*` are automatically proxied to `http://localhost:3333` using `proxy.conf.json`. On GitHub Pages static host, calls automatically fallback to `localStorage` for live demo capability.

## Testing

```bash
# Run unit tests
npx nx test shop-bridge
```
