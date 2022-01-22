import {
    Injectable,
    Logger,
    NotFoundException,
    UnprocessableEntityException,
} from '@nestjs/common';
import {InventoryItemDataModel} from '@thinkbridge/data';

@Injectable()
export class AppService {
    private inventory: InventoryItemDataModel[] = [
        {
            name: 'Item1 - Monitor',
            description: 'Dell FHD Monitor',
            price: 6000,
            id: 1001,
        },
        {
            name: 'Item2 - Logi MX mouse 3',
            description: 'Logitech Master series ergonomic mouse 3',
            price: 8000,
            id: 1002,
        },
    ];

    private logger = new Logger();

    /**
     *
     */
    getWholeInventory(): Array<InventoryItemDataModel> {
        return this.inventory;
    }

    /**
     *
     * @param id
     */
    getItemFromInventory(id: number): InventoryItemDataModel {
        const item: InventoryItemDataModel = this.inventory.find(
            (item: InventoryItemDataModel) => item.id === id
        );
        if (!item) {
            throw new NotFoundException('Item not found.');
        }
        return item;
    }

    /**
     *
     * @param item
     */
    addItemToInventory(item: InventoryItemDataModel): InventoryItemDataModel {
        const nameExists: boolean = this.inventory.some(
            (i: InventoryItemDataModel) => i.name === item.name
        );
        if (nameExists) {
            throw new UnprocessableEntityException('Item name already exists.');
        }
        const maxId: number = Math.max(
            ...this.inventory.map((i: InventoryItemDataModel) => i.id),
            0
        );
        const id: number = maxId + 1;
        const newItem: InventoryItemDataModel = {
            ...item,
            id,
        };
        this.inventory.push(newItem);
        this.logger.log('Item added to inventory', newItem);
        return newItem;
    }

    /**
     *
     * @param id
     */
    deleteItemFromInventory(id: number) {
        const index: number = this.inventory.findIndex(
            (item) => item.id === id
        );
        if (index === -1) {
            throw new NotFoundException('Item not found.');
        }
        this.inventory.splice(index, 1);
    }

    /**
     *
     * @param id
     * @param item
     */
    updateItemInInventory(
        id: number,
        item: InventoryItemDataModel
    ): InventoryItemDataModel {
        this.logger.log(`Updating item in inventory with id: ${id}`);
        const index: number = this.inventory.findIndex((i) => i.id === id);
        if (index === -1) {
            throw new NotFoundException('Item not found.');
        }
        const nameExists: boolean = this.inventory.some(
            (i: InventoryItemDataModel) => i.name === item.name && i.id !== id
        );
        if (nameExists) {
            throw new UnprocessableEntityException('Item name already exists.');
        }
        const itemToBeUpdated: InventoryItemDataModel = {
            ...item,
            id,
        };
        this.inventory[index] = itemToBeUpdated;
        return itemToBeUpdated;
    }
}
