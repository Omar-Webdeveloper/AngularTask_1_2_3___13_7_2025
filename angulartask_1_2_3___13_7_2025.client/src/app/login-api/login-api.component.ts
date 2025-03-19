import { Component } from '@angular/core';
import { MockAPIService } from '../Services/mock-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-api',
  standalone: false,
  templateUrl: './login-api.component.html',
  styleUrl: './login-api.component.css'
})
export class LoginAPIComponent {
  constructor(private mockAPIService: MockAPIService, private _route: Router) { }
  ngOnInit() { }
  
  getData(enteredUser: any) {
    //debugger
    this.mockAPIService.GetAllUsers_To_Login().subscribe((data) => {
      console.log('API Response:', data);
      let user = data.find((p: any) => p.email == enteredUser.Email && p.password == enteredUser.password);
      console.log('API Response:', user);
      if (user) {
        alert("login successfully")
        this._route.navigate(['/Admin_Dashboard'])
      } else {
        alert("Invalid Email or password ")

      }

    })
  }

}
