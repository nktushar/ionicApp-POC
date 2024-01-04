import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastCalendarPage } from './toast-calendar.page';

describe('ToastCalendarPage', () => {
  let component: ToastCalendarPage;
  let fixture: ComponentFixture<ToastCalendarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToastCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
