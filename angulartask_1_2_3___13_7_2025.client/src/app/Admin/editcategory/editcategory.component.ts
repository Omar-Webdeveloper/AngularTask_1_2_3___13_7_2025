import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminapiService } from '../AdminServices/adminapi.service';

@Component({
  selector: 'app-editcategory',
  standalone: false,
  templateUrl: './editcategory.component.html',
  styleUrl: './editcategory.component.css'
})
export class EditcategoryComponent {

  categoryContainer: any
  ngOnInit() {
    let category = this._active.snapshot.paramMap.get("id");
    this.service.Get_Category_Based_CategoryID(category).subscribe((data) => {

      this.categoryContainer = data
    })


  }
  categoryId: any
  constructor(private service: AdminapiService, private _active: ActivatedRoute) {

  }
  updateCategory(data: any) {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this.service.Edit_Category(this.categoryId, data).subscribe(() => {
      alert("update Successfully")
    })



  }
}
