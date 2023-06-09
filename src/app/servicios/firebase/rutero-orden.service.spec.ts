import { TestBed } from '@angular/core/testing';

import { RuteroOrdenService } from './rutero-orden.service';

describe('RuteroOrdenService', () => {
  let service: RuteroOrdenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuteroOrdenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
