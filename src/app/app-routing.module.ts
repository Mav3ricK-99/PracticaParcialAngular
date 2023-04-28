import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { 
    path: 'busqueda',
    loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule) 
  },
  {
    path: 'peliculas/alta',
    component: PeliculaAltaComponent
  },
  {
    path: 'actor/alta',
    component: ActorAltaComponent
  },
  {
    path: 'actor/listado',
    component: ActorListadoComponent
  },
  {
    path: 'peliculas/listado',
    component: PeliculaListadoComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
