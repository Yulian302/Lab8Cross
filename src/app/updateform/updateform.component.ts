import { Component, Input, OnInit, Output } from '@angular/core';
import { NewspaperCatalogue } from '../myform/Class/newspaper_cataloge';
import { EventEmitter } from '@angular/core';
import { ValidatorDateService } from '../services/validator-date-service.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {
  //properties for editing
  @Input() newspaper!: NewspaperCatalogue;
  @Input() show: boolean = true;
  @Output() newspaperChange: EventEmitter<NewspaperCatalogue> = new EventEmitter<NewspaperCatalogue>();
  @Output() showChange = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  validate_date(d: string): boolean {
    let validator = new ValidatorDateService();
    if (d) {
      if (!validator.validate_date(d)) {
        return false;
      }
      else {
        return true;
      }
    }
    else return true;
  }
  save(name: any, number: any, rel_date: any, p_num: any) {
    this.show = false;
    if (!this.validate_date(rel_date)) {
      throw new Error('Date error');
    }
    if (number < 0 || p_num < 0) {
      throw new Error('Number cant be less than zero!');
    }
    this.newspaper = new NewspaperCatalogue(name, number, rel_date, p_num, this.newspaper.articles);
    this.newspaperChange.emit(this.newspaper);
    this.showChange.emit(this.show);
  }
}
