import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaDeseosModel } from 'src/app/model/lista-deseo.model';
import { ProductoModel } from 'src/app/model/productos.model';
import { ListaDeseosService } from 'src/app/service/lista-deseos.service';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-editar-deseo',
  templateUrl: './editar-deseo.component.html',
  styleUrls: ['./editar-deseo.component.scss']
})
export class EditarDeseoComponent implements OnInit {

  deseo:any;
  listProductos: ProductoModel[] =[];
  nombreI: string = 'FFF';
  prodSeleccionado: ProductoModel = {idProductos: 0, nombre: '', precio: 0, cantidadStock:0}



  constructor(private listaDeseoService: ListaDeseosService,
              private productoService: ProductosService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.cargarProductos();
    this.cargarDeseo();


  }

  cargarDeseo(){
    const id = this.activatedRouter.snapshot.params.id;
    this.listaDeseoService.getDeseo(id).subscribe(resp =>{
      this.deseo = resp;
    },
    error => {console.log(error);}

    );
  }

  updateDeseo(){
    const id = this.activatedRouter.snapshot.params.id;
    let deseoAnterior = this.deseo.productos.nombre;
     this.deseo.productos.idProductos = this.prodSeleccionado.idProductos;
    this.listaDeseoService.updateDeseo(id, this.deseo).subscribe( resp => {
      console.log('Valor del menu desplegable:'+ this.prodSeleccionado.idProductos);
      this.router.navigate(['/deseos']);
      alert('El producto '+deseoAnterior+' fue actualizado')
      // console.log(resp);
    })
  }

  cargarProductos(){
    this.productoService.getAllProductos().subscribe( resp => {
      this.listProductos = resp;
    },
    error => {console.log(error);}
    )
  }

}
