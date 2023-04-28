import { Component, Input } from '@angular/core';
import { PeliculaInterface } from '../pelicula-interface.model';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.sass']
})
export class TablaPeliculasComponent {

  @Input() peliculas: Array<PeliculaInterface> = [];

}
