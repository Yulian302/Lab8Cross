import { Component, OnInit } from '@angular/core';
import { NewspaperCatalogue } from '../myform/Class/newspaper_cataloge';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {
  show_update: boolean = false;
  newspapers: NewspaperCatalogue[] = [];
  constructor() { }
  ngOnInit() { }
  addNewspaper(event: any) {
    if (event as NewspaperCatalogue) {
      let newspaper: NewspaperCatalogue = event;
      this.newspapers.push(newspaper);
      console.log(this.newspapers);
    }
    else {
      throw new Error('Error of type');
    }
  }

  update() {
    this.show_update = true;
  }
  showUp(event: any) {
    if (typeof event === 'boolean') {
      this.show_update = event;
    }
    else {
      throw new Error('Error of type');

    }
  }
  update_save(event: any, i: number) {
    if (event as NewspaperCatalogue) {
      this.newspapers[i] = event;
    }
    else{
      throw new Error('Error of type');
    }
  }
}
