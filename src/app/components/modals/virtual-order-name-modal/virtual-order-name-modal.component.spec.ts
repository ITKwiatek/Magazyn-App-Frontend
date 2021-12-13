import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualOrderNameModalComponent } from './virtual-order-name-modal.component';

describe('VirtualOrderNameModalComponent', () => {
  let component: VirtualOrderNameModalComponent;
  let fixture: ComponentFixture<VirtualOrderNameModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualOrderNameModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualOrderNameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
