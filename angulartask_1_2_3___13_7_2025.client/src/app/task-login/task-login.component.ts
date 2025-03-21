import { Component } from '@angular/core';
import { MockAPIService } from '../Services/mock-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-login',
  standalone: false,
  templateUrl: './task-login.component.html',
  styleUrl: './task-login.component.css'
})
export class TaskLoginComponent {
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
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Save user data
        this._route.navigate(['/Profile'])
      } else {
        alert("Invalid Email or password ")

      }

    })
  }
}
