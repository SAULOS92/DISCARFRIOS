import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuteroDiaPageRoutingModule } from './rutero-dia-routing.module';

import { RuteroDiaPage } from './rutero-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuteroDiaPageRoutingModule
  ],
  declarations: [RuteroDiaPage]
})
export class RuteroDiaPageModule {}
