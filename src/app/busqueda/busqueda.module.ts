import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { TablaPeliculasComponent } from '../tabla-peliculas/tabla-peliculas.component';

@NgModule({
  declarations: [
    BusquedaComponent,
    TablaPeliculasComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
  ]
})
export class BusquedaModule {
}
