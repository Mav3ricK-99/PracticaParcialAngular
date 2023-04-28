import { Component } from '@angular/core';
import { PeliculaInterface } from '../pelicula-interface.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.sass']
})
export class BusquedaComponent {

  peliculas: Array<PeliculaInterface> = [{
    id: 1,
    nombre: 'XD',
    tipo: 'comedia',
    fechaEstreno: new Date(),
    cantPublico: 2,
    fotoPortada: "x",
  }];

  construct() {

  }
}
