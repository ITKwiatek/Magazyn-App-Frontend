import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeThisOrderButtonComponent } from './merge-this-order-button.component';

describe('MergeThisOrderButtonComponent', () => {
  let component: MergeThisOrderButtonComponent;
  let fixture: ComponentFixture<MergeThisOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeThisOrderButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeThisOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
