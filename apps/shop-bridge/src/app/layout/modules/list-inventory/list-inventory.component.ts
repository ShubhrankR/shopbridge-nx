import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../../data/services/data.service';
import {InventoryItemDataModel} from '@thinkbridge/data';
import {Router} from '@angular/router';

@Component({
    selector: 'thinkbridge-list-inventory',
    templateUrl: './list-inventory.component.html',
    styleUrls: ['./list-inventory.component.scss'],
})
export class ListInventoryComponent implements OnInit, OnDestroy {
    displayInventory!: InventoryItemDataModel[];
    isInventoryLoaded = false;
    setTimeOutInterval!: any;

    constructor(private dataService: DataService, private router: Router) {}

    ngOnInit(): void {
        this.fetch();
    }

    ngOnDestroy() {
        clearTimeout(this.setTimeOutInterval);
    }

    fetch() {
        this.dataService.getWholeInventory().subscribe({
            next: (response: InventoryItemDataModel[]) => {
                this.displayInventory = response;
                this.setTimeOutInterval = setTimeout(() => {
                    this.isInventoryLoaded = true;
                }, 1000);
            },
            error: (error) => {
                console.error(error);
            },
        });
    }

    editItem(itemId: number) {
        if (itemId === 0) {
            console.log('No item is there with ID=0 in inventory', itemId);
        }
        this.router.navigate(['edit/' + itemId]);
    }
}
