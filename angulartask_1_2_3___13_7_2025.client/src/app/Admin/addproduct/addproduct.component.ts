import { Component } from '@angular/core';
import { AdminapiService } from '../AdminServices/adminapi.service';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  categories: any[] = []; // To hold the categories from the API
  // Fetch categories from the API
  fetchCategories() {
    this.service.All_Categories().subscribe((response) => {
      this.categories = response; // Assign response to categories array
    });
  }
  constructor(private service: AdminapiService) { }
  ngOnInit() { this.fetchCategories(); }

  addProduct(data: any) {
    this.service.Add_Products(data).subscribe(() => {
      alert("added")

    })
  }
}
