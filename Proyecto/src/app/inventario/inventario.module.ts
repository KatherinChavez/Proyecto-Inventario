import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [ProductoComponent, OrdenesComponent, ClientesComponent],
  exports: [ProductoComponent],
  imports: [CommonModule]
})

export class InventarioModule { }
