import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/core/header/header.component';
import {FooterComponent} from './layout/core/footer/footer.component';
import {WrapperComponent} from './layout/core/wrapper/wrapper.component';
import {LayoutModule} from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {DataModule} from './data/data.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        WrapperComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        CoreModule,
        DataModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
