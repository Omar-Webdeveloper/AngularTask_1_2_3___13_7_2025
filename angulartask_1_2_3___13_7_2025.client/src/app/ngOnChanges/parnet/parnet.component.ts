import { Component } from '@angular/core';

@Component({
  selector: 'app-parnet',
  standalone: false,
  templateUrl: './parnet.component.html',
  styleUrl: './parnet.component.css'
})
export class ParnetComponent {
  parentMessage: string = 'Hello, Child!'; // The initial value of the message

  // Method to change the message
  changeMessage() {
    this.parentMessage = 'Updated message from Parent!';
  }
}
