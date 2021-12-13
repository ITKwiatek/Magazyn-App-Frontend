import { TestBed } from '@angular/core/testing';

import { VirtualOrderService } from './virtual-order.service';

describe('VirtualOrderService', () => {
  let service: VirtualOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
