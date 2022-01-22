import {Component} from '@angular/core';
import {
    InventoryItemDataModel,
    InventoryItemPayloadModel,
} from '@thinkbridge/data';
import {DataService} from '../../../data/services/data.service';

@Component({
    selector: 'thinkbridge-add-inventory',
    templateUrl: './add-inventory.component.html',
    styleUrls: ['./add-inventory.component.scss'],
})
export class AddInventoryComponent {
    itemName!: string;
    itemDescription!: string;
    itemPrice = 0;
    itemToBeAddedToInventory!: InventoryItemPayloadModel;
    isFieldsEmpty = false;
    isItemAdded = false;

    constructor(private dataService: DataService) {}

    submit() {
        if (!this.itemName || !this.itemDescription || !this.itemPrice) {
            this.isFieldsEmpty = true;
            return;
        }
        this.isFieldsEmpty = false;
        this.itemToBeAddedToInventory = new InventoryItemPayloadModel(
            this.itemName,
            this.itemDescription,
            this.itemPrice
        );
        this.dataService
            .addItemToInventory(this.itemToBeAddedToInventory)
            .subscribe({
                next: (response: InventoryItemDataModel) => {
                    console.log('Item added -', response);
                    this.isItemAdded = true;
                },
                error: (error: Error) => {
                    console.error(error);
                },
            });
    }

    addMore() {
        this.isItemAdded = false;
        this.resetForm();
    }

    resetForm() {
        this.itemPrice = 0;
        this.itemName = '';
        this.itemDescription = '';
        this.isFieldsEmpty = false;
    }
}
