import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignComponentPage } from './design-component.page';

describe('DesignComponentPage', () => {
  let component: DesignComponentPage;
  let fixture: ComponentFixture<DesignComponentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DesignComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
