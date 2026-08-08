# Shared Data Model Library (`libs/data`)

This library provides shared TypeScript interfaces and data transfer models for the **ShopBridge** monorepo workspace.

## Exports

- **Path Mapping**: `@thinkbridge/data`

### Shared Models

```typescript
// Shared Interface representing an Inventory Item
export interface InventoryItemDataModel {
    id?: number;
    name: string;
    description: string;
    price: number;
}

// Payload Model Class
export class InventoryItemPayloadModel {
    name: string;
    description: string;
    price: number;

    constructor(name: string, description: string, price: number) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
```

## Usage

### In NestJS Backend (`apps/api`)
```typescript
import { InventoryItemDataModel } from '@thinkbridge/data';
```

### In Angular Frontend (`apps/shop-bridge`)
```typescript
import { InventoryItemDataModel } from '@thinkbridge/data';
```

## Running Unit Tests

Run `nx test data` to execute the unit tests via [Jest](https://jestjs.io).
