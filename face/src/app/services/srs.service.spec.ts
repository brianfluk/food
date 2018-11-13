import { TestBed, inject } from '@angular/core/testing';

import { SrsService } from './srs.service';

describe('SrsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrsService]
    });
  });

  it('should be created', inject([SrsService], (service: SrsService) => {
    expect(service).toBeTruthy();
  }));
});
