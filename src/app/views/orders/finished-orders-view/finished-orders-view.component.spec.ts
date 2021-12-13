import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedOrdersComponent } from './finished-orders-view.component';

describe('FinishedOrdersComponent', () => {
  let component: FinishedOrdersComponent;
  let fixture: ComponentFixture<FinishedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
