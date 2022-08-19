import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventarioModule } from './inventario/inventario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InventarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
