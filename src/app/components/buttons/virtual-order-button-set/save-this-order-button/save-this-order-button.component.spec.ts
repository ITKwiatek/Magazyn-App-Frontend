import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveThisOrderButtonComponent } from './save-this-order-button.component';

describe('SaveThisOrderButtonComponent', () => {
  let component: SaveThisOrderButtonComponent;
  let fixture: ComponentFixture<SaveThisOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveThisOrderButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveThisOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
