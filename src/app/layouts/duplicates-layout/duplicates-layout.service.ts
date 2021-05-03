import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PeopleService } from 'src/app/services/people.service';
import { DataTableColumn } from 'src/app/types/data-table-column';
import { PersonWithDuplicates } from 'src/app/types/person-with-duplicates';

@Injectable({
  providedIn: 'root'
})
export class DuplicatesLayoutService {
  private columnsSubject$ = new BehaviorSubject<Array<DataTableColumn>>([{label: '', fieldName: ''}]);
  public columns$ = this.columnsSubject$.asObservable();

  private duplicatesSubject$ = new BehaviorSubject<Array<any>>([]);
  public duplicates$ = this.duplicatesSubject$.asObservable();

  constructor(
    private peopleService: PeopleService
  ) {
    this.columnsSubject$.next(this.duplicateColumns())
    this.getDuplicates();
  }

  private duplicateColumns() {
    return [
      {
        label: 'Name',
        computed: ({ firstName, lastName }: PersonWithDuplicates) => `${firstName} ${lastName}`,
      },
      {
        label: 'Email Address',
        fieldName: 'emailAddress',
      },
      {
        label: 'Potential Duplicates',
        computed: ({ duplicates }: PersonWithDuplicates) => duplicates
          .map(({ firstName, lastName, emailAddress, crmId }) => `${firstName} ${lastName} | ${emailAddress} | CRM ID: ${crmId}`)
          .join('\n'),
      }
    ]
  }

  async getDuplicates(): Promise<void> {
    const result = await this.peopleService.getDuplicates();
    this.duplicatesSubject$.next(result);
  }
}
