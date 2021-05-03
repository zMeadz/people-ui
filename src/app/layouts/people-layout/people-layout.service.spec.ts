import { TestBed } from '@angular/core/testing';

import { PeopleLayoutService } from './people-layout.service';

describe('PeopleLayoutService', () => {
  let service: PeopleLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
