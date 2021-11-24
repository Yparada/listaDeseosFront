import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDeseosService {

  private API_SERVER= "http://localhost:8080/listaDeseos/";

  constructor(private httpClient: HttpClient) { }


  public getAllListaDeseos(id:number): Observable<any>{
    return this.httpClient.get(this.API_SERVER+'?idUsuario=' + id);
  }

  public getDeseo(id:number): Observable<any>{
    return this.httpClient.get(this.API_SERVER+ id);
  }

  public saveDeseo(deseo: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, deseo);
  }

  public deleteDeseo(id: number): Observable<any>{
    return this.httpClient.delete(this.API_SERVER + id);
  }

  public updateDeseo(id: number, deseo: any): Observable<any>{
    return this.httpClient.put(this.API_SERVER + id, deseo);
  }
}
