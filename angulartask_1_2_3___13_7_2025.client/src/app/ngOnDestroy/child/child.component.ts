import { Component,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  intervalId: any;

  constructor() {
    console.log('Child Component Created');
    // Start a timer (example of a resource that needs cleanup)
    this.intervalId = setInterval(() => {
      console.log('Child Component is alive');
    }, 1000);
  }

  // This hook is called just before the component is destroyed
  ngOnDestroy(): void {
    console.log('Child Component Destroyed');
    clearInterval(this.intervalId); // Clean up the interval
  }
}
