import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WrapperComponent} from './layout/core/wrapper/wrapper.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: WrapperComponent,
        loadChildren: () =>
            import('./layout/layout.module').then((m) => m.LayoutModule),
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
