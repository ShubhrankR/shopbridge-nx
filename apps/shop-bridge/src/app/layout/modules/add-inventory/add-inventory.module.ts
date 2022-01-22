import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddInventoryRoutingModule} from './add-inventory-routing.module';
import {AddInventoryComponent} from './add-inventory.component';
import {CoreModule} from '../../../core/core.module';

@NgModule({
    declarations: [AddInventoryComponent],
    imports: [CommonModule, AddInventoryRoutingModule, CoreModule],
})
export class AddInventoryModule {}
