import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() header: string = '';

  constructor(
    private router: Router
  ) {}

  onEmailCharacterCountClick() {
    this.router.navigate(['/email-character-count']);
  }

  onFindDuplicatesClick() {
    this.router.navigate(['/duplicates']);
  }

  onPeopleClick() {
    this.router.navigate(['/people']);
  }
}
