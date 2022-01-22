import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditInventoryComponent} from './pages/edit-inventory/edit-inventory.component';
import {DeleteComponent} from './pages/delete/delete.component';

const routes: Routes = [
    {
        path: '',
        component: EditInventoryComponent,
    },
    {
        path: 'delete',
        component: DeleteComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EditInventoryRoutingModule {}
