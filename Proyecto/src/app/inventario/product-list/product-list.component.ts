import { Component, Input } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { Product } from '../interfaces/inventario.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(public productosService: ProductosService) { }

  @Input('data') products: Product[] = []

}
