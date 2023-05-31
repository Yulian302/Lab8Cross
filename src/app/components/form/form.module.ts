import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FormComponent],
  imports: [IonicModule, ReactiveFormsModule,CommonModule],
  exports: [FormComponent],
})
export class FormModule {}
