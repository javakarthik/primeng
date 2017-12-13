import { TestBed, inject } from '@angular/core/testing';

import { DirecttvApiService } from './directtv-api.service';

describe('DirecttvApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirecttvApiService]
    });
  });

  it('should be created', inject([DirecttvApiService], (service: DirecttvApiService) => {
    expect(service).toBeTruthy();
  }));
});
