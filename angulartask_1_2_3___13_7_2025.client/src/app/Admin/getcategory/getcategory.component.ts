import { Component } from '@angular/core';
import { AdminapiService } from '../AdminServices/adminapi.service';

@Component({
  selector: 'app-getcategory',
  standalone: false,
  templateUrl: './getcategory.component.html',
  styleUrl: './getcategory.component.css'
})
export class GetcategoryComponent {
  constructor(private NewService: AdminapiService) { }
  ngOnInit() {
    this.See_All_Categories();
  }
  dataCategory: any;
  See_All_Categories()
  {
    this.NewService.All_Categories().subscribe((data) => { this.dataCategory = data });
  }
}
