import { Component } from '@angular/core';

@Component({
  selector: 'app-parnet1',
  standalone: false,
  templateUrl: './parnet1.component.html',
  styleUrl: './parnet1.component.css'
})
export class Parnet1Component {
  Recive(data:any) { alert(`this message from child:${data}`) }
}
