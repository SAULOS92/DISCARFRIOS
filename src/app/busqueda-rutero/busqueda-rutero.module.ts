import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaRuteroPageRoutingModule } from './busqueda-rutero-routing.module';

import { BusquedaRuteroPage } from './busqueda-rutero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaRuteroPageRoutingModule
  ],
  declarations: [BusquedaRuteroPage]
})
export class BusquedaRuteroPageModule {}
