import { TestBed } from '@angular/core/testing';

import { TransacoesService } from './transacoes.service';

describe('TransacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransacoesService = TestBed.get(TransacoesService);
    expect(service).toBeTruthy();
  });
});
