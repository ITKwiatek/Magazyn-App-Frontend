import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThisOrderButtonComponent } from './edit-this-order-button.component';

describe('EditThisOrderButtonComponent', () => {
  let component: EditThisOrderButtonComponent;
  let fixture: ComponentFixture<EditThisOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditThisOrderButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditThisOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
