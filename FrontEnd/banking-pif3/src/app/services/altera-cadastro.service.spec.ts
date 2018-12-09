import { TestBed } from '@angular/core/testing';

import { AlteraCadastroService } from './altera-cadastro.service';

describe('AlteraCadastroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlteraCadastroService = TestBed.get(AlteraCadastroService);
    expect(service).toBeTruthy();
  });
});
