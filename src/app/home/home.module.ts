import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MyformComponent } from '../myform/myform.component';
import { MyformModule } from '../myform/myform.module';
import { ViewFormModule } from '../viewform/viewform.module';
import { UpdateFormModule } from '../updateform/updateform.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MyformModule,
    ViewFormModule,
    UpdateFormModule
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
