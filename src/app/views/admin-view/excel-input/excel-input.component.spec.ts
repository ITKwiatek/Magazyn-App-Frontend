import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelInputComponent } from './excel-input.component';

describe('ExcelInputComponent', () => {
  let component: ExcelInputComponent;
  let fixture: ComponentFixture<ExcelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
