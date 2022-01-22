import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListInventoryRoutingModule} from './list-inventory-routing.module';
import {ListInventoryComponent} from './list-inventory.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    declarations: [ListInventoryComponent],
    imports: [CommonModule, ListInventoryRoutingModule, SharedModule],
})
export class ListInventoryModule {}
