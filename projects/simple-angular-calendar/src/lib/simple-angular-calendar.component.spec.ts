import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAngularCalendarComponent } from './simple-angular-calendar.component';

describe('SimpleAngularCalendarComponent', () => {
  let component: SimpleAngularCalendarComponent;
  let fixture: ComponentFixture<SimpleAngularCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleAngularCalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleAngularCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
