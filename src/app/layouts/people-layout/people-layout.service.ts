import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PeopleService } from 'src/app/services/people.service';
import { DataTableColumn } from 'src/app/types/data-table-column';
import { Person } from 'src/app/types/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleLayoutService {
  private columnsSubject$ = new BehaviorSubject<Array<DataTableColumn>>([{label: '', fieldName: ''}]);
  public columns$ = this.columnsSubject$.asObservable();

  private peopleSubject$ = new BehaviorSubject<Array<Person>>([]);
  public people$ = this.peopleSubject$.asObservable();

  constructor(
    private peopleService: PeopleService
  ) {
    this.columnsSubject$.next(this.peopleColumns())
    this.getPeople();
  }

  async getPeople(): Promise<void> {
    const people = await this.peopleService.getPeople();
    this.peopleSubject$.next(people);
  }

  peopleColumns() {
    return [
      {
        label: 'Name',
        computed: ({ firstName, lastName }: Person) => `${firstName} ${lastName}`
      },
      {
        label: 'Email Address',
        fieldName: 'emailAddress',
      },
      {
        label: 'Title',
        fieldName: 'title'
      }
    ]
  }
}
