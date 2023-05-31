import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SecondFormComponent } from './second-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [SecondFormComponent],
  exports: [SecondFormComponent]
})
export class SecondFormModule {}
