import { Component } from '@angular/core';
import { EmailCharactersLayoutService } from './email-characters-layout.service';

@Component({
  selector: 'app-email-characters-layout',
  templateUrl: './email-characters-layout.component.html',
  styleUrls: ['./email-characters-layout.component.scss']
})
export class EmailCharactersLayoutComponent {
  public columns$ = this.layoutService.columns$;
  public data$ = this.layoutService.emailCharacterMap$

  constructor(
    private layoutService: EmailCharactersLayoutService
  ) {}
}
