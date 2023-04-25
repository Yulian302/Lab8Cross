import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MyformComponent } from './myform.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [MyformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports:[MyformComponent]
})
export class MyformModule { }
