import { Injectable } from '@angular/core';
import { Person } from '../types/person';
import { PersonApiResponse } from '../types/person-api-response';

@Injectable({
  providedIn: 'root'
})
export class PeopleMappingService {
  mapCollection(collection: Array<PersonApiResponse>): Array<Person> {
    return collection.map(this.mapRecord)
  }

  mapRecord({ first_name, last_name, title, crm_id, email_address }: PersonApiResponse): Person {
    return {
      firstName: first_name,
      lastName: last_name,
      title,
      crmId: crm_id,
      emailAddress: email_address,
    }
  }
}
