import { TestBed } from '@angular/core/testing';

import { JspdfService } from './jspdf.service';

describe('JspdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JspdfService = TestBed.get(JspdfService);
    expect(service).toBeTruthy();
  });
});
