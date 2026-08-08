# Antigravity AI Project Context & Guidelines 🚀

This document provides project context, technical architecture, and operational guidelines for **Antigravity AI** assistants working on the **ShopBridge** monorepo codebase.

---

## 📌 Project Overview

**ShopBridge** is an Inventory Management full-stack web application monorepo built with **Nx 20**, **Angular 19**, **NestJS 11**, and **Tailwind CSS**. It features a **Soft Neumorphic & Tactile UI Design System**, an interactive mouse-tracking HTML5 Canvas background animation, and a Light / Dark Mode Theme Switcher.

### Technical Stack & Architecture
- **Monorepo Manager**: Nx 20 (`@nx/*`)
- **Frontend App**: `apps/shop-bridge` (Angular 19, Standalone Components, Angular Signals, Tailwind CSS v3)
- **Backend API**: `apps/api` (NestJS 11, Express, REST API)
- **Shared Data Library**: `libs/data` (`@thinkbridge/data` shared TypeScript models/interfaces)
- **Testing**: Jest 29 for Unit Tests, Cypress 13 for E2E Tests
- **Deployment**: Live on GitHub Pages ([https://shubhrankr.github.io/shopbridge-nx/home](https://shubhrankr.github.io/shopbridge-nx/home))

---

## ⚠️ Mandatory AI Agent Rules

### 1. **NEVER PUSH CODE WITHOUT EXPLICIT PERMISSION**
> [!CAUTION]
> **CRITICAL RULE**: The AI assistant MUST NEVER execute `git push` or attempt to push any branch/commit to remote repositories without receiving explicit permission and confirmation from the author / user.

### 2. **Environment Setup Before Commands**
> [!IMPORTANT]
> Always ensure Node.js `v24.19.0` is active before running build or CLI scripts:
> ```bash
> export NVM_DIR="$HOME/.nvm"
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
> nvm use 24.19.0
> ```

### 3. **Maintain Architecture & Component Standards**
- **Angular Frontend**: Keep components 100% standalone (`standalone: true`). Use Angular Signals for reactive state. Maintain Soft Neumorphic styling tokens (`shadow-neu-flat`, `shadow-neu-pressed`).
- **NestJS Backend**: Maintain controller-service-module separation. Always import shared contracts from `@thinkbridge/data`.

### 4. **Verification & Quality Assurance**
- Always run `export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 24.19.0 && npx nx run-many -t build` to verify clean compilation of both frontend and backend before concluding any task.
