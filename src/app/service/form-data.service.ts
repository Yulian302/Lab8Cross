import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  getResult(formData: any, x: number,quad:boolean) : number{
    if (!quad) {
      let a =Number(formData.a);
      let b =Number(formData.b);
      let c =Number(formData.c);
      let d =Number(formData.d);
      let x_ =Number(x);
      return (
        a * x_ * x_ * x_ +
        b * x_ * x_ +
        c * x_ +
        d
      );
    } else {
      let a =Number(formData.a);
      let b =Number(formData.b);
      let c =Number(formData.c);
      let x_ =Number(x);
      return a * x_ * x_ + b * x_ + c;
    }
  }
  constructor() {}
}
