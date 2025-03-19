import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminapiService } from '../AdminServices/adminapi.service';
@Component({
  selector: 'app-editproduct',
  standalone: false,
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {

  productContainer: any
  ngOnInit() {
    let product = this._active.snapshot.paramMap.get("id");
    this.service.Get_Product_Based_ProductID(product).subscribe((data) => {

      this.productContainer = data
    })


  }
  productId: any
  constructor(private service: AdminapiService, private _active: ActivatedRoute) {

  }
  updateProduct(data: any) {
    this.productId = this._active.snapshot.paramMap.get("id");
    this.service.Edit_Product(this.productId, data).subscribe(() => {
      alert("update Successfully")
    })



  }
}
