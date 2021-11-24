export class ProductoModel{
  idProductos:number=0;
  nombre: string= '';
  precio: number=0;
  cantidadStock: number=0;

  constructor(idProductos: number, nombre: string, precio:number, cantidadStock:number) {
      this.idProductos = idProductos;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidadStock = cantidadStock;
  }

}
