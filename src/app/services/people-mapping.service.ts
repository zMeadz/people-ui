import { Injectable } from '@angular/core';
import { EmailCharacterMap } from '../types/email-character-map';
import { Person } from '../types/person';
import { PersonApiResponse } from '../types/person-api-response';
import { EmailCharacterCountResponse } from '../types/email-character-count-response';
import { DuplicatesApiResponse } from '../types/duplicates-api-response';
import { PersonWithDuplicates } from '../types/person-with-duplicates';

@Injectable({
  providedIn: 'root'
})
export class PeopleMappingService {
  mapDuplicates(collection: Array<DuplicatesApiResponse>): Array<PersonWithDuplicates> {
    return collection.map(({ record, matches }) => ({
      ...this.mapPersonRecord(record),
      duplicates: this.mapPersonCollection(matches)
    }))
  }

  mapEmailCharacterCount(map: EmailCharacterCountResponse): Array<EmailCharacterMap> {
    return Object.entries(map).map(([key, value]) => ({ character: key, count: value }));
  }

  mapPersonCollection(collection: Array<PersonApiResponse>): Array<Person> {
    return collection.map(this.mapPersonRecord)
  }

  mapPersonRecord({ first_name, last_name, title, crm_id, email_address }: PersonApiResponse): Person {
    return {
      firstName: first_name,
      lastName: last_name,
      title,
      crmId: crm_id,
      emailAddress: email_address,
    }
  }
}
