import { Component } from '@angular/core';
import { MockAPIService } from '../Services/mock-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-api',
  standalone: false,
  templateUrl: './register-api.component.html',
  styleUrl: './register-api.component.css'
})
export class RegisterAPIComponent {

  constructor(private service: MockAPIService, private _route: ActivatedRoute) { }

  ngOnInit() { }

  adduser(data: any) {
    this.service.Post_To_AddNewUser(data).subscribe(() => {
      alert("added")

    })
  }


}
