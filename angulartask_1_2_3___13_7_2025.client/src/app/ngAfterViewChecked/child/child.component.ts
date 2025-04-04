import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() count!: number;

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called: View checked. Counter value:', this.count);
  }
}
