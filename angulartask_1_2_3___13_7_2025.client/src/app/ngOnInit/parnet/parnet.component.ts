import { Component } from '@angular/core';

@Component({
  selector: 'app-parnet',
  standalone: false,
  templateUrl: './parnet.component.html',
  styleUrl: './parnet.component.css'
})
export class ParnetComponent {
  message: string = ''; // Default value for the message

  constructor() {
    console.log('Constructor: Component created');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Initialization logic here');
    // Initialization logic (e.g., setting default values, fetching data)
    this.message = 'Hello, this message was set in ngOnInit!';
  }
}
