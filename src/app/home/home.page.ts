import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  receivedFormData: any;
  receivedFormDataX: any;
  showDataDisplay: boolean = false;
  displayedResult: any;
  onFormData(formData: any) {
    this.receivedFormData = formData;
    this.showDataDisplay = true;
  }
  onFormDataX(form:any){
    this.receivedFormDataX = form;
  }
  onResult(result: any) {
    this.displayedResult = result;
    console.log(this.displayedResult);
  }
  constructor() {}

}
