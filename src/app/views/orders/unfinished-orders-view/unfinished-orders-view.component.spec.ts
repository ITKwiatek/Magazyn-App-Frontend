import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfinishedOrdersViewComponent } from './unfinished-orders-view.component';

describe('UnfinishedOrdersViewComponent', () => {
  let component: UnfinishedOrdersViewComponent;
  let fixture: ComponentFixture<UnfinishedOrdersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnfinishedOrdersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfinishedOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
