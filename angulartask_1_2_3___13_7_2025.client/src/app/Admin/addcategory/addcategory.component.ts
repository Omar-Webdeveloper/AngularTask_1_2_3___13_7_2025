import { Component } from '@angular/core';
import { AdminapiService } from '../AdminServices/adminapi.service';

@Component({
  selector: 'app-addcategory',
  standalone: false,
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  constructor(private service: AdminapiService) { }
  ngOnInit() { }

  addCategory(data: any) {
    this.service.Add_Categories(data).subscribe(() => {
      alert("added")

    })
  }
}
