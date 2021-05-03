import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Ok';
  @Output() click = new EventEmitter();

  onClick(event: any) {
    if (event) {
      event.stopPropagation();
    }
    this.click.emit()
  }
}
