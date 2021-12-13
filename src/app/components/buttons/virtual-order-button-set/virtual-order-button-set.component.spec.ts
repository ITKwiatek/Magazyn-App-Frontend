import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualOrderButtonSetComponent } from './virtual-order-button-set.component';

describe('VirtualOrderButtonSetComponent', () => {
  let component: VirtualOrderButtonSetComponent;
  let fixture: ComponentFixture<VirtualOrderButtonSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualOrderButtonSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualOrderButtonSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
