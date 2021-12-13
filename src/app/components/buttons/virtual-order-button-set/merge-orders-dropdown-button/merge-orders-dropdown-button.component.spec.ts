import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeOrdersButtonComponent } from './merge-orders-dropdown-button.component';

describe('MergeOrdersButtonComponent', () => {
  let component: MergeOrdersButtonComponent;
  let fixture: ComponentFixture<MergeOrdersButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeOrdersButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeOrdersButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
