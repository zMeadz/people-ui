import { TestBed } from '@angular/core/testing';

import { GatewayConfigurationService } from './gateway-configuration.service';

describe('GatewayConfigurationService', () => {
  let service: GatewayConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatewayConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
