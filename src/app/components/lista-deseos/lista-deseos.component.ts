import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from 'src/app/service/lista-deseos.service';

@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.scss']
})
export class ListaDeseosComponent implements OnInit {

  listaDeseos: any[] = [];
  id: number = 2;

  constructor(private listaDeseosService: ListaDeseosService) { }

  ngOnInit(): void {
    this.cargarListaDeseos(this.id);
  }

  cargarListaDeseos(id: number){
    this.listaDeseosService.getAllListaDeseos(id).subscribe( resp => {
      this.listaDeseos = resp;
    })
  }

  eliminarDeseo(deseo: any){
    this.listaDeseosService.deleteDeseo(deseo.idDeseos).subscribe( resp =>{
        this.cargarListaDeseos(this.id);
    },
    error => {console.log(error);}
    )


  }



}
