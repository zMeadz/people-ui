import { TestBed } from '@angular/core/testing';

import { PeopleMappingService } from './people-mapping.service';

describe('PeopleMappingService', () => {
  let service: PeopleMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
