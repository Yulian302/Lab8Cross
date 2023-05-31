import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form: FormGroup;
  @Output() N = new EventEmitter<number>();
  @Output() X = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      N: ['', [Validators.required, Validators.min(3), Validators.max(4)]],
      X: [0, [Validators.required]],
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.form.valid) {
      this.N.emit(this.form.value.N);
      this.X.emit(this.form.value.X);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
