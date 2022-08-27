import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productList = [ 'Producto : Camisa','Descripción: Mujer' , 'Talla: M' , 
                  'Producto : Camiseta','Descripción: Niño' , 'Talla: S',
                  'Producto : Camiseta','Descripción: Hombre' , 'Talla: L']
  
  constructor() {}
}




