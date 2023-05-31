import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [IonicModule, ReactiveFormsModule],
  exports: [FormComponent],
})
export class FormModule {}
