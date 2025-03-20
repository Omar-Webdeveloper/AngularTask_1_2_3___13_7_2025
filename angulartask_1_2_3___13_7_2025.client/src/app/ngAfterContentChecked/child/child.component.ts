import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ContentChild('projectedContent', { static: true }) content!: ElementRef;

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called:', this.content?.nativeElement.textContent);
  }
}
