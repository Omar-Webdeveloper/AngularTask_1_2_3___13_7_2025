import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  loggedInUser: any; // Store logged-in user data
  showEditPopup: boolean = false; // Control edit popup visibility

  ngOnInit(): void {
    const user = localStorage.getItem('loggedInUser');
    this.loggedInUser = user ? JSON.parse(user) : null; // Load user data
  }

  openEditPopup() {
    this.showEditPopup = true; // Open the popup
  }

  handleUpdatedUser(updatedUser: any) {
    this.loggedInUser = updatedUser; // Update the user data
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser)); // Save updated data locally
    this.showEditPopup = false; // Close the popup
  }
}
