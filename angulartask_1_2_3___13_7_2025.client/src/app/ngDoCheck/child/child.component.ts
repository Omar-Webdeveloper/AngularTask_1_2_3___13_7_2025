import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() items: string[] = []; // Input property to receive data from parent
  previousLength: number = 0; // Store the previous length of the array

  // This hook is called during each change detection cycle
  ngDoCheck(): void {
    if (this.items.length !== this.previousLength) {
      console.log(`Items changed! Previous: ${this.previousLength}, Current: ${this.items.length}`);
      this.previousLength = this.items.length; // Update the stored value
    }
  }
}
