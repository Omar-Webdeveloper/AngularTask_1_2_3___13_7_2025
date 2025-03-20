import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-outputchild',
  standalone: false,
  templateUrl: './outputchild.component.html',
  styleUrl: './outputchild.component.css'
})
export class OutputchildComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
