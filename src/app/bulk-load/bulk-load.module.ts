import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulkLoadPageRoutingModule } from './bulk-load-routing.module';

import { BulkLoadPage } from './bulk-load.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulkLoadPageRoutingModule
  ],
  declarations: [BulkLoadPage]
})
export class BulkLoadPageModule {}
