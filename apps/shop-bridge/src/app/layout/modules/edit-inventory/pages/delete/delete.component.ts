import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InventoryItemDataModel} from '@thinkbridge/data';
import {DataService} from '../../../../../data/services/data.service';

@Component({
    selector: 'thinkbridge-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
    itemIdToBeDeleted!: number;
    sadFaceSVGPath = '../../../../../../assets/images/frown-regular.svg';
    setTimeOutInterval!: any;
    inventoryItem!: InventoryItemDataModel;
    isItemLoadedFromInventory = false;
    isItemDeleted = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dataService: DataService
    ) {}

    ngOnInit(): void {
        this.itemIdToBeDeleted = this.activatedRoute.snapshot.params['id'];
        this.fetchItem();
    }

    fetchItem() {
        this.dataService
            .getItemFromInventory(this.itemIdToBeDeleted)
            .subscribe({
                next: (response: InventoryItemDataModel) => {
                    this.setTimeOutInterval = setTimeout(() => {
                        this.isItemLoadedFromInventory = true;
                    }, 1000);
                    this.inventoryItem = response;
                },
                error: (error) => console.error(error),
            });
    }

    deleteItem() {
        this.dataService
            .deleteItemFromInventory(this.itemIdToBeDeleted)
            .subscribe({
                next: (response) => {
                    console.log('Item deleted successfully');
                    this.isItemDeleted = true;
                },
                error: (error) => {
                    console.error(error);
                },
            });
    }
}
