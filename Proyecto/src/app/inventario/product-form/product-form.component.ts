import { Component, Input } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { Product } from '../interfaces/inventario.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})


export class ProductFormComponent {
 
  @Input('addProduct') addProduct: any

  title: string = 'Detalle del Producto'
  placeholderName: string = 'Ingrese nombre del producto'
  placeholderDescrip: string = 'Ingrese descripción del producto'

  constructor(public productosService: ProductosService) { }
  
  productos: any[] = [];
  products: any = {};
  
  size: string[] = ['S', 'M', 'L', 'XL']
  opcionSeleccionado: string  = '';
  tallaSeleccionado: string = ''

  guardar() {
    this.productos.push(this.products);
    this.products = {}
  }

  capturar() {
    this.tallaSeleccionado = this.opcionSeleccionado;
  }

  product: Product = {
    products: '',
    completed: false
  }

  addWithEvent(e: any) {
    this.product.products = e.target[0].value
    this.addProduct({ ...this.product })
    this.product = { products: '', completed: false }
    e.target[0].value = ''
  }

  add() {
    this.addProduct({ ...this.product })
    this.product = { products: '', completed: false }
  }

  inputHandler(e: any) { }

  showTable: boolean = false

  show() : void{
    this.showTable = true
  }


}
