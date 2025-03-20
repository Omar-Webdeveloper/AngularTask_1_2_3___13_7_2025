import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ContentChild('projectedContent', { static: true }) content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('Projected content initialized:', this.content?.nativeElement.textContent);
  }
}
