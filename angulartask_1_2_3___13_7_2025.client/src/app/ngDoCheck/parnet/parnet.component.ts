import { Component } from '@angular/core';

@Component({
  selector: 'app-parnet',
  standalone: false,
  templateUrl: './parnet.component.html',
  styleUrl: './parnet.component.css'
})
export class ParnetComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  removeItem() {
    this.items.pop();
  }
}
