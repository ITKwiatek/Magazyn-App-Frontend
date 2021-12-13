import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelThisOrderButtonComponent } from './cancel-this-order-button.component';

describe('CancelThisOrderButtonComponent', () => {
  let component: CancelThisOrderButtonComponent;
  let fixture: ComponentFixture<CancelThisOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelThisOrderButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelThisOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
