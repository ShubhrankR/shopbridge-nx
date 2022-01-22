import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditInventoryRoutingModule} from './edit-inventory-routing.module';
import {EditInventoryComponent} from './pages/edit-inventory/edit-inventory.component';
import {CoreModule} from '../../../core/core.module';
import {SharedModule} from '../../../shared/shared.module';
import {DeleteComponent} from './pages/delete/delete.component';

@NgModule({
    declarations: [EditInventoryComponent, DeleteComponent],
    imports: [
        CommonModule,
        EditInventoryRoutingModule,
        CoreModule,
        SharedModule,
    ],
})
export class EditInventoryModule {}
