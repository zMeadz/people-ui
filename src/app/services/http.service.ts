import { Inject, Injectable } from '@angular/core';
import { ServiceConfiguration } from '../types/service-configuration';
import { GatewayConfigurationService } from './configurations/gateway-configuration.service';
import { PeopleConfigurationService } from './configurations/people-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    protected configurationService: GatewayConfigurationService
  ) {}

  private getUrl(path: string): string {
    return `${this.configurationService.getBaseUrl()}/${path}`;
  }

  async get(url: string) {
    return this.handleResponse(fetch(this.getUrl(url)));
  }

  async handleResponse(response: Promise<any>) {
    const result = await response;
    const json = await result.json();
    return json.data;
  }
}
