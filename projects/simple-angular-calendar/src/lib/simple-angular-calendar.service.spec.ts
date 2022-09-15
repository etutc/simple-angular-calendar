import { TestBed } from '@angular/core/testing';

import { SimpleAngularCalendarService } from './simple-angular-calendar.service';

describe('SimpleAngularCalendarService', () => {
  let service: SimpleAngularCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleAngularCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
