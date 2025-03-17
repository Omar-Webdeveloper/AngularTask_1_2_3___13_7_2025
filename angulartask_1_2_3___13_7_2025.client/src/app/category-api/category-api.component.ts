import { Component } from '@angular/core';
import { MockAPIService } from '../Services/mock-api.service';

@Component({
  selector: 'app-category-api',
  standalone: false,
  templateUrl: './category-api.component.html',
  styleUrl: './category-api.component.css'
})
export class CategoryAPIComponent {
  constructor(private service: MockAPIService) { }
  ngOnInit() {
    this.Get_Categories();
  }
  dataCategory: any;

  Get_Categories() {
    this.service.All_Categories().subscribe((data) => { 
      this.dataCategory = data;
    }
    );
  }
}
