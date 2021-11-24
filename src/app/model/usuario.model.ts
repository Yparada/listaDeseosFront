export class UsuarioModel{
  idUsuarios?: number =0;
  nombre: string = '';
  correo: string = '';

  constructor(idUsuarios: number, nombre:string, correo: string ) {
    this.idUsuarios = idUsuarios;
    this.nombre = nombre;
    this.correo = correo;
  }
}
