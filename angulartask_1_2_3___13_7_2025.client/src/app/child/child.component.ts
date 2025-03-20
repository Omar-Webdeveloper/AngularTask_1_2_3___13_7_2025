import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message!: string; // Decorator to receive data from parent
  @Output() childEvent = new EventEmitter<string>(); // Create an EventEmitter

  // This method emits a message to the parent
  sendMessageToParent() {
    this.childEvent.emit('Hello, Parent! This is Child!');
  }
}
