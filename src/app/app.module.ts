import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogService} from "./services/log.service";
import {UsersModule} from "./modules/users/users.module";
import {ProductsModule} from "./modules/products/products.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
