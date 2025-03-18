import { Component } from '@angular/core';
import { MockAPIService } from '../Services/mock-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-api',
  standalone: false,
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css'
})
export class ProductAPIComponent {
  constructor(private service: MockAPIService, private _active: ActivatedRoute) { }
  ngOnInit() {
    this.Get_Products();
  }
  ProductsCategory: any=[];
  Category_Id: any;
  Get_Products() {
    this.Category_Id = this._active.snapshot.paramMap.get('id');
    console.log('Category_Id:', this.Category_Id);
    this.service.All_Products().subscribe(
      (products) =>
      {
        console.log('API Response:', products);
        this.ProductsCategory = products.filter((x: any) => x.categoryId == this.Category_Id);
        console.log('Filtered Products:', this.ProductsCategory);
              }
    );

  }
}
