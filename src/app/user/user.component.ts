import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "FooBar"
  avatarUrl = "assets/users/user-1.jpg"

  onSelectUser() {
    console.log("User Selected");
  }
}
