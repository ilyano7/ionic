import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnnouncmentPageRoutingModule } from './add-announcment-routing.module';

import { AddAnnouncmentPage } from './add-announcment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnnouncmentPageRoutingModule
  ],
  declarations: [AddAnnouncmentPage]
})
export class AddAnnouncmentPageModule {}
