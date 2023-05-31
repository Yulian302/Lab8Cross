import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  getResult(formData: any, x: number) : number{
    if (formData.d) {
      return (
        formData.a * x * x * x +
        formData.b * x * x +
        formData.c * x +
        formData.d
      );
    } else {
      return formData.a * x * x + formData.b * x + formData.c;
    }
  }
  constructor() {}
}
