import { Component, OnInit } from '@angular/core';
import { ListaDeseosModel } from 'src/app/model/lista-deseo.model';
import { ProductoModel } from 'src/app/model/productos.model';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { ListaDeseosService } from 'src/app/service/lista-deseos.service';
import { ProductosService } from 'src/app/service/productos.service';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  listProductos: ProductoModel[] =[];
  usuario: any;
  idUsuario: number = 2;
  validar:any;

  constructor(private productoService: ProductosService,
              private listaDeseosServios: ListaDeseosService,
              private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarProductos();
    this.cargarUsuario(this.idUsuario);

    console.log(this.listProductos[0]);


  }

  cargarProductos(){
    this.productoService.getAllProductos().subscribe( resp => {
      this.listProductos = resp;
    },
    error => {console.log(error);}
    )
  }

  cargarUsuario(id:number){
    this.usuarioService.getUsuario(id).subscribe( resp => {
        this.usuario = resp;
        console.log('Usuario actual :'+resp.nombre);
    });

  }

  agregarProducto(producto: ProductoModel){
    let newLista = new ListaDeseosModel();
    newLista.productos = producto;
    newLista.usuarios = this.usuario;
    this.validar = newLista;
    this.listaDeseosServios.saveDeseo(newLista).subscribe(resp =>{
      alert("Agregado");
    })
  }

}
