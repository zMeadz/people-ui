import { Component } from '@angular/core';
import { PeopleLayoutService } from './people-layout.service';

@Component({
  selector: 'app-people-layout',
  templateUrl: './people-layout.component.html',
  styleUrls: ['./people-layout.component.scss']
})
export class PeopleLayoutComponent {
  public columns$ = this.peopleLayoutService.columns$;
  public people$ = this.peopleLayoutService.people$;

  constructor(
    private peopleLayoutService: PeopleLayoutService
  ) { }
}
