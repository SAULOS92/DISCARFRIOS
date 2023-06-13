import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuteroOrdenDiaPageRoutingModule } from './rutero-orden-dia-routing.module';

import { RuteroOrdenDiaPage } from './rutero-orden-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuteroOrdenDiaPageRoutingModule
  ],
  declarations: [RuteroOrdenDiaPage]
})
export class RuteroOrdenDiaPageModule {}
