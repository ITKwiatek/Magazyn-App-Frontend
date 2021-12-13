import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrderInputComponent } from './search-order-input.component';

describe('SearchOrderInputComponent', () => {
  let component: SearchOrderInputComponent;
  let fixture: ComponentFixture<SearchOrderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOrderInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
