import { TestBed } from '@angular/core/testing';

import { PeopleConfigurationService } from './people-configuration.service';

describe('PeopleConfigurationService', () => {
  let service: PeopleConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
