import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../components/my-header/header.module';
import { FormModule } from '../components/form/form.module';
import { DisplayResultModule } from '../display-result/display-result.module';
import { SecondFormModule } from '../second-form/second-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    FormModule,
    DisplayResultModule,
    SecondFormModule
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
