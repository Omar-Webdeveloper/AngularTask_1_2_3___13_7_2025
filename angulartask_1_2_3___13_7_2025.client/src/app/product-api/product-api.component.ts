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
  Products: any;
  Category_Id: any;
  Get_Products() {
    this.Category_Id = this._active.snapshot.paramMap.get('id');

    this.service.All_Products().subscribe(
      (products) => {
                    this.Products = products.filter((x: any) => x.category_id == this.Category_Id);
                    }

                    );
}
}
