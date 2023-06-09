import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuteroDiaPage } from './rutero-dia.page';

const routes: Routes = [
  {
    path: '',
    component: RuteroDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuteroDiaPageRoutingModule {}
