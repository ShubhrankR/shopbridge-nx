import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListInventoryComponent} from './list-inventory.component';

const routes: Routes = [{path: '', component: ListInventoryComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListInventoryRoutingModule {}
