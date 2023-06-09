import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulkLoadPage } from './bulk-load.page';

const routes: Routes = [
  {
    path: '',
    component: BulkLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulkLoadPageRoutingModule {}
