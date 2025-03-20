import { Component } from '@angular/core';

@Component({
  selector: 'app-parnet',
  standalone: false,
  templateUrl: './parnet.component.html',
  styleUrl: './parnet.component.css'
})
export class ParnetComponent {
  message = 'Initial message from Parent';

  // Method to update the message
  updateMessage() {
    this.message = `Updated message at ${new Date().toLocaleTimeString()}`;
  }
}
