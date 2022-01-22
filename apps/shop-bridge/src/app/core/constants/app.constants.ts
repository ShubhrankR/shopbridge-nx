import {Injectable} from '@angular/core';
import {InventoryItemDataModel} from '@thinkbridge/data';

@Injectable()
export class AppConstants {
    public static readonly NewItem: InventoryItemDataModel = {
        name: 'Item3 - Laptop',
        description: 'Lenovo Legion 5 Gaming laptop',
        price: 85000,
        id: 1003,
    };
}
