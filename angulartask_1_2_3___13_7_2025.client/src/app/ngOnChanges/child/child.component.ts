import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message!: string; // Input property to receive data from parent

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called:', changes); // Logs the changes object
  }
}
