import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: false,
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  @Output() message = new EventEmitter<string>(); // Output property to send data to parent
  Senddata() {
    this.message.emit('Sura');
  }
}
