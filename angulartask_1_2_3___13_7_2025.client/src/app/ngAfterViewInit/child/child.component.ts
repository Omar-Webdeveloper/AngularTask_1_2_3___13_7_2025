import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ViewChild('childTitle', { static: false }) titleElement!: ElementRef; // Reference to DOM element

  ngAfterViewInit(): void {
    console.log('Child Component View Initialized');
    console.log('Title Element Content:', this.titleElement.nativeElement.textContent);
    this.titleElement.nativeElement.style.color = 'blue'; // Change DOM element style
  }
}
