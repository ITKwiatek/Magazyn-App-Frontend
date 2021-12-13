import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTableFilterButtonComponent } from './order-table-filter-button.component';

describe('OrderTableFilterButtonComponent', () => {
  let component: OrderTableFilterButtonComponent;
  let fixture: ComponentFixture<OrderTableFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTableFilterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTableFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
