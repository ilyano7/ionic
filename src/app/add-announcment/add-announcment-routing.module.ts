import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnnouncmentPage } from './add-announcment.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnnouncmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnnouncmentPageRoutingModule {}
