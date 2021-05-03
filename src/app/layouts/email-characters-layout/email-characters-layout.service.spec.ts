import { TestBed } from '@angular/core/testing';

import { EmailCharactersLayoutService } from './email-characters-layout.service';

describe('EmailCharactersLayoutService', () => {
  let service: EmailCharactersLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailCharactersLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
