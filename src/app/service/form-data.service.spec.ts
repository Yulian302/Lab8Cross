import { TestBed } from '@angular/core/testing';

import { FormDataService } from './form-data.service';

describe('FormDataService', () => {
  let service: FormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Validating service for quad', () => {
    service = new FormDataService();
    const quad = { a: 5, b: 3, c: 2 };
    const x = 2;
    const expectedResult = 28;
    expect(service.getResult(quad, x)).toEqual(expectedResult);
  });

  it('Validating service for poly', () => {
    service = new FormDataService();
    const quad = { a: 5, b: 3, c: 2, d: 3 };
    const x = 2;
    const expectedResult = 59;
    expect(service.getResult(quad, x)).toEqual(expectedResult);
  });
});
