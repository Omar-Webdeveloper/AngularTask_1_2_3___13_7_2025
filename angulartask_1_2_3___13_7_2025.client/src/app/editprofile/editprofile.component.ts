import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MockAPIService } from '../Services/mock-api.service';

@Component({
  selector: 'app-editprofile',
  standalone: false,
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent {
  @Input() userData: any; // Input to receive user data
  @Output() userUpdated = new EventEmitter<any>(); // Output to send updated data
  updatedUser: any; // Temporary storage for form changes

  constructor(private mockAPIService: MockAPIService) { }

  ngOnInit(): void {
    this.updatedUser = { ...this.userData }; // Make a copy of userData for editing
  }

  saveChanges() {
    // Update the user data in the API
    this.mockAPIService.Update_User(this.updatedUser).subscribe((response) => {
      alert('Profile updated successfully!');
      this.userUpdated.emit(this.updatedUser); // Emit updated data back to the profile
    });
  }

  closePopup() {
    this.userUpdated.emit(this.userData); // Emit the original data if canceled
  }
}
