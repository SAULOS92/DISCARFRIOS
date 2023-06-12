import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaRuteroPage } from './busqueda-rutero.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaRuteroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaRuteroPageRoutingModule {}
