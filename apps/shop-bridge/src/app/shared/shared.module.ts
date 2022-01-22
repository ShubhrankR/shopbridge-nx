import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageLoaderComponent} from './components/page-loader/page-loader.component';

@NgModule({
    declarations: [PageLoaderComponent],
    exports: [PageLoaderComponent],
    imports: [CommonModule],
})
export class SharedModule {}
