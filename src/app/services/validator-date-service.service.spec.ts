import { TestBed } from '@angular/core/testing';
import { ValidatorDateServiceService } from './validator-date-service.service';
import stringToDate from '../myform/service/StringToData';

describe('ValidatorDateServiceService', () => {
  let service: ValidatorDateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorDateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('For date 15.25.875',()=>{
    let s = service.validate_date('15.25.875');
    expect(s).toEqual(false);
  });
  it('for 15.02.1987',()=>{
    let s = service.validate_date('15.02.1987');
    expect(s).toEqual(true);
  });
  it('string to date validate: 15.02.2010 to date',()=>{
    let str_date = stringToDate('15.02.2010');
    let date = new Date('2010.02.15');
    expect(str_date).toEqual(date);
  });
});
