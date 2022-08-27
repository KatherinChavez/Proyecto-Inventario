import { Component } from '@angular/core';
import { Product } from '../interfaces/inventario.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  public product: Product[] = []


  addProduct = (product: Product) => {
    this.product.push(product)
  }

}
