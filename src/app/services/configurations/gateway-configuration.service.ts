import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceConfiguration } from '../../types/service-configuration';

@Injectable({
  providedIn: 'root'
})
export class GatewayConfigurationService implements ServiceConfiguration {
  getBaseUrl() {
    return environment.GATEWAY_BASE_URL;
  }
}
