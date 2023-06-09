import { TestBed } from '@angular/core/testing';

import { CargaRuteroService } from './carga-rutero.service';

describe('CargaRuteroService', () => {
  let service: CargaRuteroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaRuteroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
