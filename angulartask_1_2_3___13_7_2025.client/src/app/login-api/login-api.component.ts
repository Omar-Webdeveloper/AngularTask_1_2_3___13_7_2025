import { Component } from '@angular/core';
import { MockAPIService } from '../Services/mock-api.service';
@Component({
  selector: 'app-login-api',
  standalone: false,
  templateUrl: './login-api.component.html',
  styleUrl: './login-api.component.css'
})
export class LoginAPIComponent {

  constructor(private mockAPIService: MockAPIService) { }
  ngOnInit() { }

  // Method to fetch and process login data
  getData(user: { email: string; password: string }) {
    this.mockAPIService.GetAllUsers_To_Login().subscribe((users: any[]) => {
      const foundUser = users.find(
        (u) => u.email === user.email && u.password === user.password
      );

      if (foundUser) {
        alert('Login successful!');
        // Redirect to another page or perform further actions
      } else {
        alert('Invalid email or password. Please try again.');
      }
    });
  }

}
