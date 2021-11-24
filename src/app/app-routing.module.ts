import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarDeseoComponent } from './components/editar-deseo/editar-deseo.component';
import { ListaDeseosComponent } from './components/lista-deseos/lista-deseos.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'deseos', component: ListaDeseosComponent},
  {path: 'editarDeseo/:id', component: EditarDeseoComponent},
  {path: '**', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
