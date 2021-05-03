import { TestBed } from '@angular/core/testing';

import { DuplicatesLayoutService } from './duplicates-layout.service';

describe('DuplicatesLayoutService', () => {
  let service: DuplicatesLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuplicatesLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
