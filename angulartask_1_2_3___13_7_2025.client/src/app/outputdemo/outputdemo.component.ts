import { Component } from '@angular/core';

@Component({
  selector: 'app-outputdemo',
  standalone: false,
  templateUrl: './outputdemo.component.html',
  styleUrl: './outputdemo.component.css'
})
export class OutputdemoComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
