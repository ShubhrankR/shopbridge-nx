# ShopBridge API Service (`apps/api`)

This project is the REST backend service for **ShopBridge**, built using [NestJS](https://nestjs.com/) v8 and Node.js.

## Overview

The API application manages the product inventory data store. It exposes JSON endpoints for CRUD operations and shares TypeScript data models with the frontend client via the `@thinkbridge/data` monorepo library.

## Project Structure

```
apps/api/src/
├── app/
│   ├── app.controller.ts      # REST API route handlers
│   ├── app.controller.spec.ts # Controller unit tests
│   ├── app.module.ts          # NestJS Root module definition
│   ├── app.service.ts         # In-memory inventory state & business logic
│   └── app.service.spec.ts    # Service unit tests
├── assets/                    # Static assets (if any)
├── environments/              # Environment configurations
└── main.ts                    # Application bootstrap file (Port 3333, Prefix '/api')
```

## Running the API

To start the API development server independently:

```bash
# Serve API via Nx
nx serve api
```

The service runs on **`http://localhost:3333/api`**.

## Key Business Logic

- **In-Memory Store**: Currently maintains items in an in-memory TypeScript array.
- **Unique Name Validation**: Throws `UnprocessableEntityException` (422) if an attempt is made to create or update an item with a duplicate name.
- **ID Generation**: Automatically increments and assigns the highest numerical ID upon item creation.
- **Error Handling**: Uses NestJS standard HTTP exceptions (`NotFoundException`, `UnprocessableEntityException`).

## Testing

```bash
# Run unit tests
nx test api
```
