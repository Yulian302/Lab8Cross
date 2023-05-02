import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MyformComponent } from '../myform/myform.component';
import { MyformModule } from '../myform/myform.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MyformModule
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
