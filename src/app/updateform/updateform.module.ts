import { FormsModule } from '@angular/forms';
import { MyformModule } from '../myform/myform.module';
import { UpdateformComponent } from './updateform.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [UpdateformComponent],
  exports: [UpdateformComponent]
})
export class UpdateFormModule {}