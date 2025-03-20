import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputchild',
  standalone: false,
  templateUrl: './inputchild.component.html',
  styleUrl: './inputchild.component.css'
})
export class InputchildComponent {
  @Input() item: string='';
}
