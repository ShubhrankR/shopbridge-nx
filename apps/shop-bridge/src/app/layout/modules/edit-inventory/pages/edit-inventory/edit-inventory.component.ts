import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../../../../data/services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {
    InventoryItemDataModel,
    InventoryItemPayloadModel,
} from '@thinkbridge/data';

@Component({
    selector: 'thinkbridge-edit-inventory',
    templateUrl: './edit-inventory.component.html',
    styleUrls: ['./edit-inventory.component.scss'],
})
export class EditInventoryComponent implements OnInit, OnDestroy {
    inventoryItem!: InventoryItemDataModel;
    itemName!: string;
    itemDescription!: string;
    itemPrice = 0;
    itemIdFromRoute!: number;
    isItemLoadedFromInventory = false;
    isItemInfoNotUpdated = false;
    isItemUpdated = false;
    isDeleteButtonClicked = false;
    setTimeOutInterval!: any;

    constructor(
        private dataService: DataService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.itemIdFromRoute = this.activatedRoute.snapshot.params['id'];
        this.fetchItem();
    }

    ngOnDestroy() {
        clearTimeout(this.setTimeOutInterval);
    }

    fetchItem() {
        this.dataService.getItemFromInventory(this.itemIdFromRoute).subscribe({
            next: (response: InventoryItemDataModel) => {
                this.setTimeOutInterval = setTimeout(() => {
                    this.isItemLoadedFromInventory = true;
                }, 1000);
                this.setItemData(response);
            },
            error: (error) => console.error(error),
        });
    }

    setItemData(itemData: InventoryItemDataModel) {
        this.inventoryItem = itemData;
        this.itemName = this.inventoryItem.name;
        this.itemDescription = this.inventoryItem.description;
        this.itemPrice = this.inventoryItem.price;
    }

    onUpdate() {
        if (
            this.itemName === this.inventoryItem.name &&
            this.itemPrice === this.inventoryItem.price &&
            this.itemDescription === this.inventoryItem.description
        ) {
            console.log('No updates to item, detected!');
            this.isItemInfoNotUpdated = true;
            return;
        }
        this.triggerUpdateWorkflow();
    }

    triggerUpdateWorkflow() {
        const updatedItem: InventoryItemPayloadModel =
            new InventoryItemPayloadModel(
                this.itemName,
                this.itemDescription,
                this.itemPrice
            );
        this.dataService
            .updateItemInInventory(this.itemIdFromRoute, updatedItem)
            .subscribe({
                next: (response: InventoryItemDataModel) => {
                    console.log('Item Updated successfully ', response);
                    this.isItemUpdated = true;
                    this.isItemInfoNotUpdated = false;
                },
                error: (error) => {
                    console.error(error);
                },
            });
    }

    triggerDeleteWorkflow() {
        this.isDeleteButtonClicked = true;
        this.router.navigate(['edit/' + this.itemIdFromRoute + '/delete']);
    }
}
