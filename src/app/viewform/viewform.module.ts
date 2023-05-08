import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ViewformComponent } from './viewform.component';
import { MyformModule } from '../myform/myform.module';
import { UpdateFormModule } from '../updateform/updateform.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyformModule,
    UpdateFormModule
  ],
  declarations: [ViewformComponent],
  exports: [ViewformComponent]
})
export class ViewFormModule {}