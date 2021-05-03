import { Injectable } from '@angular/core';
import { Person } from '../types/person';
import { PeopleConfigurationService } from './configurations/people-configuration.service';
import { HttpService } from './http.service';
import { PeopleMappingService } from './people-mapping.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends HttpService {
  constructor(
    protected configurationService: PeopleConfigurationService,
    protected mappingService: PeopleMappingService
  ) {
    super(configurationService);
  }

  async getPeople(): Promise<Array<Person>> {
    const result = await this.get('people');
    return this.mappingService.mapPersonCollection(result);
  }

  async getEmailCharacterCount() {
    const result = await this.get('people/character-count?field=email_address');
    return this.mappingService.mapEmailCharacterCount(result);
  }
}
