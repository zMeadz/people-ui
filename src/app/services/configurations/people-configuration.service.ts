import { Injectable } from '@angular/core';
import { ServiceConfiguration } from 'src/app/types/service-configuration';
import { GatewayConfigurationService } from './gateway-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleConfigurationService extends GatewayConfigurationService {
  getBaseUrl() {
    return `${GatewayConfigurationService.prototype.getBaseUrl.call(this)}/services/salesloft`
  }
}
