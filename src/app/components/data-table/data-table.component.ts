import { Component, Input } from '@angular/core';
import { DataTableColumn } from 'src/app/types/data-table-column';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() columns: Array<DataTableColumn> | null = [];
  @Input() data: Array<any | null> | null = [];

  constructor() { }

  rowValue(row: any, { fieldName, computed }: DataTableColumn) {
    if (fieldName) {
      return row[fieldName]
    }
    if (computed) {
      return computed(row)
    }
    return '';
  }
}
