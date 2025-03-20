import { Component } from '@angular/core';

@Component({
  selector: 'app-parnet',
  standalone: false,
  templateUrl: './parnet.component.html',
  styleUrl: './parnet.component.css'
})
export class ParnetComponent {
  showChild = true; // Toggle child component visibility

  toggleChild() {
    this.showChild = !this.showChild;
  }
}
