import { Component } from '@angular/core';

@Component({
  selector: 'app-parnet',
  standalone: false,
  templateUrl: './parnet.component.html',
  styleUrl: './parnet.component.css'
})
export class ParnetComponent {
  //parentMessage: string = 'Hello from Parent Component!';
  // This method handles the event emitted by the child
  receiveMessageFromChild(childMessage: string) {
    alert(`Message from Child: ${childMessage}`);
  }
}
