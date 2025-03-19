import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  @Input() message!: string; // Decorator to receive data from parent
 
}
