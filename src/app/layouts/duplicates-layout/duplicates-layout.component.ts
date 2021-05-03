import { Component } from '@angular/core';
import { DuplicatesLayoutService } from './duplicates-layout.service';

@Component({
  selector: 'app-duplicates-layout',
  templateUrl: './duplicates-layout.component.html',
  styleUrls: ['./duplicates-layout.component.scss']
})
export class DuplicatesLayoutComponent {
  public columns$ = this.layoutService.columns$
  public data$ = this.layoutService.duplicates$

  constructor(
    private layoutService: DuplicatesLayoutService
  ) { }
}
