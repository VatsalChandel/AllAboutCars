import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WheelsPage } from './wheels.page';

const routes: Routes = [
  {
    path: '',
    component: WheelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WheelsPageRoutingModule {}
