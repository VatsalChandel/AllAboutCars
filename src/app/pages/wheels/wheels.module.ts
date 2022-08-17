import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WheelsPageRoutingModule } from './wheels-routing.module';

import { WheelsPage } from './wheels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WheelsPageRoutingModule
  ],
  declarations: [WheelsPage]
})
export class WheelsPageModule {}
