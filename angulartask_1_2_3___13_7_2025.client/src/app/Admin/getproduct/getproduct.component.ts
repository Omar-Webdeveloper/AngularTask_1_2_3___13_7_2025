import { Component } from '@angular/core';
import { AdminapiService } from '../AdminServices/adminapi.service';

@Component({
  selector: 'app-getproduct',
  standalone: false,
  templateUrl: './getproduct.component.html',
  styleUrl: './getproduct.component.css'
})
export class GetproductComponent {
  constructor(private NewService: AdminapiService) { }
  ngOnInit() {
    this.See_All_Products();
  }
  dataProduct: any;
  See_All_Products() {
    this.NewService.All_Products().subscribe((data) => { this.dataProduct = data });
  }
}
