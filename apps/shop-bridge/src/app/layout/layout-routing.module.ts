import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./modules/landing/landing.module').then(
                (m) => m.LandingModule
            ),
    },
    {
        path: 'list',
        loadChildren: () =>
            import('./modules/list-inventory/list-inventory.module').then(
                (m) => m.ListInventoryModule
            ),
    },
    {
        path: 'edit/:id',
        loadChildren: () =>
            import('./modules/edit-inventory/edit-inventory.module').then(
                (m) => m.EditInventoryModule
            ),
    },
    {
        path: 'add',
        loadChildren: () =>
            import('./modules/add-inventory/add-inventory.module').then(
                (m) => m.AddInventoryModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
