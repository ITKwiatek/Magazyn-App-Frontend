import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualOrdersViewComponent } from './virtual-orders-view.component';

describe('VirtualOrdersViewComponent', () => {
  let component: VirtualOrdersViewComponent;
  let fixture: ComponentFixture<VirtualOrdersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualOrdersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
