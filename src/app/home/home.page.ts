import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @Input() pointsChange: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() {}

}
