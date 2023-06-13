import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuteroOrdenDiaPage } from './rutero-orden-dia.page';

const routes: Routes = [
  {
    path: '',
    component: RuteroOrdenDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuteroOrdenDiaPageRoutingModule {}
