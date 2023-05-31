import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from './class/author';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  author!: Author;
  @Output() points: number = 0;
  xInputs: any;
  yInputs: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      N: ['', [Validators.required, Validators.min(1)]],
    });

    this.xInputs = new FormArray([]);
    this.yInputs = new FormArray([]);

    this.form.addControl('xInputs', this.xInputs);
    this.form.addControl('yInputs', this.yInputs);
  }

  submitN(n: any) {
    this.points = Number(n);

    this.generateXInputs(n);
    this.generateYInputs(n);
  }

  generateXInputs(n: number) {
    this.xInputs.clear();
  
    for (let i = 0; i < n; i++) {
      this.xInputs.push(this.fb.control(''));
    }
  }
  
  generateYInputs(n: number) {
    this.yInputs.clear();
  
    for (let i = 0; i < n; i++) {
      this.yInputs.push(this.fb.control(''));
    }
  }

  ngOnInit() {}
}
