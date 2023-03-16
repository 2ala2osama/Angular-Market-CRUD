import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() title: string = "";
  @Input() data: any[] = [];
  @Output() selectValue= new EventEmitter<any>()

  detectChange(event: any) {
    this.selectValue.emit(event)
  }
}
