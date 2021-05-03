import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PeopleService } from 'src/app/services/people.service';
import { DataTableColumn } from 'src/app/types/data-table-column';
import { EmailCharacterMap } from 'src/app/types/email-character-map';

@Injectable({
  providedIn: 'root'
})
export class EmailCharactersLayoutService {
  private columnsSubject$ = new BehaviorSubject<Array<DataTableColumn>>([{label: '', fieldName: ''}]);
  public columns$ = this.columnsSubject$.asObservable();

  private emailCharacterSubject$ = new BehaviorSubject<Array<EmailCharacterMap>>([]);
  public emailCharacterMap$ = this.emailCharacterSubject$.asObservable();

  constructor(
    private peopleService: PeopleService
  ) {
    this.columnsSubject$.next(this.emailCharacterCountColumns())
    this.getEmailCharacterCount();
  }

  private emailCharacterCountColumns() {
    return [
      {
        label: 'Character',
        fieldName: 'character',
      },
      {
        label: 'Count',
        fieldName: 'count',
      },
    ]
  }

  async getEmailCharacterCount(): Promise<void> {
    const result = await this.peopleService.getEmailCharacterCount();
    this.emailCharacterSubject$.next(result);
  }
}
