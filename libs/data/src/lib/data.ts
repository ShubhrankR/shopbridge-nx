export interface InventoryItemDataModel {
    name: string;
    description: string;
    price: number;
    id?: number;
}

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
