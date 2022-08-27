import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({ 
  declarations: [
    ClientesComponent,
    ProductosComponent,
    OrdenesComponent,
    MenuComponent,
    ProductListComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MenuComponent,
    ProductosComponent
  ],
})
export class InventarioModule { }
