import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { ListaDeseosComponent } from './components/lista-deseos/lista-deseos.component';
import { ProductosService } from './service/productos.service';
import { ListaDeseosService } from './service/lista-deseos.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './service/usuarios.service';
import { EditarDeseoComponent } from './components/editar-deseo/editar-deseo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    ListaDeseosComponent,
    EditarDeseoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProductosService, ListaDeseosService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
