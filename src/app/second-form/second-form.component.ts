import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../service/form-data.service';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
})
export class SecondFormComponent implements OnInit {
  @Input() N: any;
  @Input() X: any;
  @Output() result = new EventEmitter<number>();
  form!: FormGroup;
  parentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService
  ) {
    this.form = this.fb.group({
      a: [0],
      b: [0],
      c: [0],
      d: [0],
    });

    this.parentForm = this.fb.group({
      nestedForm: this.form,
    });
  }

  isQuad() {
    return Number(this.N) === 3;
  }

  ngOnInit() {}

  submitForm() {
    if (this.form.valid) {
      this.X = 2;
      if(this.N==3){
        this.submitQuad();
      }
      else{
        this.submitPoly();
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  submitQuad() {
    const result = this.formDataService.getResult(this.form.value, this.X);
    this.result.emit(result);
  }

  submitPoly() {
    const result = this.formDataService.getResult(this.form.value, this.X);
    this.result.emit(result);
  }
}
